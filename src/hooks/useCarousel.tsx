import React from 'react';

import { Carousel } from 'Components';

export const useCarousel = (slidersLength: number) => {
  const [currentSlide, setCurrentSlide] = React.useState<number>(0);

  const handleLeftClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidersLength - 1 : prev - 1));
  };

  const handleRightClick = () => {
    setCurrentSlide((prev) => (prev === slidersLength - 1 ? 0 : prev + 1));
  };

  const CarouselItem = React.useCallback(
    ({ children }: React.ComponentProps<'div'>) => (
      <Carousel slidersLength={slidersLength} handleLeftClick={handleLeftClick} handleRightClick={handleRightClick}>
        {children}
      </Carousel>
    ),
    [slidersLength, currentSlide]
  );

  return {
    CarouselItem,
    currentSlide,
  };
};
