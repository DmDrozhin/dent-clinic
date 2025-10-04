declare module '@/global/swiper/useSwiperScroll.js' {
  import type { Ref } from 'vue';
  import type { Swiper as SwiperClass } from 'swiper';

  export function useSwiper(): {
    slider: Ref<SwiperClass | null>;
    handleProgress: (ev: Event | CustomEvent) => void;
    gradientOpacity: Ref<number>;
    goToSlide: (index: number, el?: HTMLElement | null) => void;
    updateProgress: (el?: HTMLElement | null, delay?: number, progress?: number) => void;
    updateSwiper: (el?: HTMLElement | null, delay?: number) => void;
    allowTouchMove: (el?: HTMLElement | null, val?: boolean) => void;
    scrollBarSpace: Ref<number>;
    handleScrollContainer: (ev: Event | CustomEvent) => void;
    scrollBarActive: Ref<boolean>;
    paginationFractionText: Ref<string>;
    goNext: (el?: HTMLElement | null, goNext?: boolean) => void;
  }
}
