import { computed, nextTick, reactive } from 'vue';
export function useSwiper() {
    const slider = reactive({
        start: true,
        end: false,
        isLocked: true,
        paginationSteps: null,
        paginationStep: null,
        paginationFraction: ''
    });
    const scrollBarActive = computed(() => !slider.isLocked);
    const scrollBarSpace = computed(() => (slider.isLocked ? '12px' : '16px'));
    const paginationFractionText = computed(() => slider.paginationFraction);
    const gradientOpacity = computed(() => {
        const scroll = {
            off: { start: 0, end: 0 },
            start: { start: 0, end: 1 },
            middle: { start: 1, end: 1 },
            end: { start: 1, end: 0 }
        };
        if ((slider.start && slider.end) || slider.isLocked) return scroll.off;
        else return slider.start ? scroll.start : slider.end ? scroll.end : scroll.middle;
    });
    // Scroll progress control for multiple slides container. Common
    const handleProgress = (ev) => {
        if (ev) {
            slider.start = ev.detail[0].isBeginning;
            slider.end = ev.detail[0].isEnd;
            slider.isLocked = ev.detail[0].isLocked;
            // Data for custom pagination block:
            nextTick(() => {
                // Number of pagination steps
                slider.paginationSteps = ev.detail[0].snapGrid.length;
                // Current pagination step
                slider.paginationStep = parseInt(ev.detail[0].snapIndex + 1);
                // Pagination text: for example 1 / 5 (one of five steps)
                slider.paginationFraction = ev.detail[0].el.innerText;
            });
        }
    };
    // Alternative scroll progress control for single slide container. 0 - start, 1 - end.
    const handleScrollContainer = (ev) => {
        if (ev) {
            slider.start = ev.detail[1] === 0;
            slider.end = ev.detail[1] === 1;
            slider.isLocked = ev.detail[0].isBeginning && ev.detail[0].isEnd;
        }
    };
    const goToSlide = (index, el) => {
        setTimeout(() => {
            const swiper = el.value?.swiper;
            if (swiper) {
                if (index === 0 || index === swiper.slides.length - 1) swiper.slideTo(index, 500, false);
                else if (!swiper.isLocked) {
                    el.value.classList.add('in-transition');
                    const containerHeight = swiper.el.clientHeight;
                    const slideHeight = swiper.slides[index]?.offsetHeight || 0;
                    const offset = (containerHeight - slideHeight) / 2;
                    const slideOffset = swiper.slides[index]?.offsetTop || 0;
                    const newPosition = -(slideOffset - offset);
                    swiper.setTranslate(newPosition);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                    setTimeout(() => {
                        el.value.classList.remove('in-transition');
                    }, 300);
                }
            }
        }, 150);
    };
    const updateSwiper = (el, delay = 150) => {
        setTimeout(() => {
            if (el) {
                el.value?.swiper.update();
            }
        }, delay);
    };
    const updateProgress = (el, delay = 150, progress = 1) => {
        setTimeout(() => {
            if (el) {
                const swiper = el.value?.swiper;
                swiper.update();
                swiper.setProgress(progress, 100);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
        }, delay);
    };
    const allowTouchMove = (el, val = true) => {
        const swiper = el.value?.swiper;
        if (swiper) {
            swiper.allowTouchMove = val;
            swiper.allowSlideNext = val;
        }
    };
    // For custom navigation buttons, control next / prev sliding if buttons are outside of swiper container
    const goNext = (el, goNext) => {
        const swiper = el.swiper;
        if (!swiper || goNext === undefined) return;
        if (swiper.allowSlideNext && goNext) swiper.slideNext();
        if (swiper.allowSlidePrev && !goNext) swiper.slidePrev();
    };
    return {
        slider,
        handleProgress,
        gradientOpacity,
        goToSlide,
        updateProgress,
        updateSwiper,
        allowTouchMove,
        scrollBarSpace,
        handleScrollContainer,
        scrollBarActive,
        paginationFractionText,
        goNext
    };
}
