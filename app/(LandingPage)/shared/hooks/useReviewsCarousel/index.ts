import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCarousel } from '@/shared/hooks/useCarousel';

export const useReviewsCarousel = (autoPlay: boolean | undefined) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
    },
    autoPlay ? [Autoplay()] : [],
  );
  const [emblaRef2, emblaApi2] = useEmblaCarousel(
    {
      loop: true,
      watchDrag: false,
    },
    autoPlay ? [Autoplay()] : [],
  );

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    scrollPrev,
    scrollNext,
    scrollTo,
    selectedIndex,
    scrollSnaps,
  } = useCarousel(emblaApi, emblaApi2);

  return {
    emblaRef,
    emblaRef2,
    nextBtnDisabled,
    prevBtnDisabled,
    scrollNext,
    scrollPrev,
    scrollSnaps,
    scrollTo,
    selectedIndex,
  };
};
