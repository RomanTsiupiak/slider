import React from 'react';

import { IconButton } from './IconButton';
import { LeftArrowIcon, RightArrowIcon } from './Icons';

type CarouselProps = {
  slidersLength: number;
  handleLeftClick: () => void;
  handleRightClick: () => void;
} & React.ComponentProps<'div'>;

export const Carousel = ({ children, handleLeftClick, handleRightClick }: CarouselProps) => (
  <div className="max-w-full min-w-full h-full flex justify-center items-center gap-x-3">
    <IconButton icon={<LeftArrowIcon />} onClick={handleLeftClick} className="text-blue-700" />
    {children}
    <IconButton icon={<RightArrowIcon />} onClick={handleRightClick} className="text-blue-700" />
  </div>
);
