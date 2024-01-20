import { useCallback, useEffect, useState } from 'react';
import type { EmblaCarouselType } from 'embla-carousel-react';

export const useCarousel = (
  emblaApi: EmblaCarouselType | undefined,
  emblaApi2?: EmblaCarouselType,
) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi && emblaApi.scrollPrev();
    emblaApi2 && emblaApi2.scrollPrev();
  }, [emblaApi, emblaApi2]);

  const scrollNext = useCallback(() => {
    emblaApi && emblaApi.scrollNext();
    emblaApi2 && emblaApi2.scrollNext();
  }, [emblaApi, emblaApi2]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi && emblaApi2) {
        emblaApi.scrollTo(index);
        emblaApi2.scrollTo(index);
      }
    },
    [emblaApi, emblaApi2],
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    nextBtnDisabled,
    prevBtnDisabled,
    scrollNext,
    scrollPrev,
    scrollSnaps,
    scrollTo,
    selectedIndex,
  };
};
