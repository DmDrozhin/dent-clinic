import { computed, nextTick, reactive } from 'vue';
import type { Ref } from 'vue';

// Типы для слайдера
interface SwiperInstance {
  el: HTMLElement;
  slides: HTMLElement[];
  snapGrid: number[];
  snapIndex: number;
  isBeginning: boolean;
  isEnd: boolean;
  isLocked: boolean;
  allowTouchMove: boolean;
  allowSlideNext: boolean;
  allowSlidePrev: boolean;
  slideTo: (index: number, speed?: number, runCallbacks?: boolean) => void;
  slideNext: () => void;
  slidePrev: () => void;
  setTranslate: (translate: number) => void;
  setProgress: (progress: number, speed?: number) => void;
  update: () => void;
  updateActiveIndex: () => void;
  updateSlidesClasses: () => void;
}

interface SwiperElement extends HTMLElement {
  swiper: SwiperInstance;
}

interface SliderState {
  start: boolean;
  end: boolean;
  isLocked: boolean;
  paginationSteps: number | null;
  paginationStep: number | null;
  paginationFraction: string;
}

interface ProgressEventDetail {
  detail: [SwiperInstance, number?];
}

export function useSwiper() {
  const slider = reactive<SliderState>({
    start: true,
    end: false,
    isLocked: true,
    paginationSteps: null,
    paginationStep: null,
    paginationFraction: '',
  });

  const scrollBarActive = computed(() => !slider.isLocked);
  const scrollBarSpace = computed(() => (slider.isLocked ? '12px' : '16px'));
  const paginationFractionText = computed(() => slider.paginationFraction);

  const gradientOpacity = computed(() => {
    const scroll = {
      off: { start: 0, end: 0 },
      start: { start: 0, end: 1 },
      middle: { start: 1, end: 1 },
      end: { start: 1, end: 0 },
    };
    if ((slider.start && slider.end) || slider.isLocked) return scroll.off;
    else return slider.start ? scroll.start : slider.end ? scroll.end : scroll.middle;
  });

  // Контроль прогресса для мульти-слайдов
  const handleProgress = (ev: ProgressEventDetail | null) => {
    if (ev) {
      const swiper = ev.detail[0];
      slider.start = swiper.isBeginning;
      slider.end = swiper.isEnd;
      slider.isLocked = swiper.isLocked;

      nextTick(() => {
        slider.paginationSteps = swiper.snapGrid.length;
        slider.paginationStep = parseInt(String(swiper.snapIndex + 1));
        slider.paginationFraction = swiper.el.innerText;
      });
    }
  };

  // Контроль прогресса для одного слайда (0 - начало, 1 - конец)
  const handleScrollContainer = (ev: ProgressEventDetail | null) => {
    if (ev) {
      const swiper = ev.detail[0];
      const progress = ev.detail[1];
      slider.start = progress === 0;
      slider.end = progress === 1;
      slider.isLocked = swiper.isBeginning && swiper.isEnd;
    }
  };

  const goToSlide = (index: number, el: Ref<SwiperElement | null>) => {
    setTimeout(() => {
      const swiper = el.value?.swiper;
      if (swiper) {
        if (index === 0 || index === swiper.slides.length - 1) {
          swiper.slideTo(index, 500, false);
        } else if (!swiper.isLocked) {
          el.value?.classList.add('in-transition');
          const containerHeight = swiper.el.clientHeight;
          const slideHeight = swiper.slides[index]?.offsetHeight || 0;
          const offset = (containerHeight - slideHeight) / 2;
          const slideOffset = swiper.slides[index]?.offsetTop || 0;
          const newPosition = -(slideOffset - offset);

          swiper.setTranslate(newPosition);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();

          setTimeout(() => {
            el.value?.classList.remove('in-transition');
          }, 300);
        }
      }
    }, 150);
  };

  const updateSwiper = (el: Ref<SwiperElement | null>, delay = 150) => {
    setTimeout(() => {
      el.value?.swiper.update();
    }, delay);
  };

  const updateProgress = (el: Ref<SwiperElement | null>, delay = 150, progress = 1) => {
    console.log('updateProgress', { progress });

    setTimeout(() => {
      const swiper = el.value?.swiper;
      if (swiper) {
        swiper.update();
        swiper.setProgress(progress, 100);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }, delay);
  };

  const allowTouchMove = (el: Ref<SwiperElement | null>, val = true) => {
    const swiper = el.value?.swiper;
    if (swiper) {
      swiper.allowTouchMove = val;
      swiper.allowSlideNext = val;
    }
  };

  const goNext = (el: SwiperElement, goNext?: boolean) => {
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
    goNext,
  };
}
