import React from 'react';

import { BreedCatCard } from 'Components';
import { useCarousel } from 'hooks';

import { useSlider } from './useSlider';

const Slider = () => {
  const { slides, fetchNextPage } = useSlider();
  const { CarouselItem, currentSlide } = useCarousel(slides.length);

  if (currentSlide === slides.length - 3) {
    fetchNextPage();
  }

  return (
    <div className="flex overflow-hidden">
      {slides.map((item, index) => {
        return (
          index === currentSlide && (
            <CarouselItem key={index}>
              <BreedCatCard name={item.name} description={item.description} imgUrl={item.image?.url} />
            </CarouselItem>
          )
        );
      })}
    </div>
  );
};

export default Slider;
