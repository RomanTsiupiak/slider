import React from 'react';
import { CatAvatar } from './CatAvatar';

type BreedCatCardProps = {
  name: string;
  description: string;
  imgUrl: string;
} & React.ComponentProps<'div'>;

export const BreedCatCard = ({ name, description, imgUrl }: BreedCatCardProps) => (
  <div className="max-w-[525px] h-[300px] bg-white rounded-2xl p-[22px] sm:flex gap-x-2 pointer-events-auto">
    <div className="sm:flex flex-[0_0_45%] items-center hidden">
      {imgUrl ? <img src={imgUrl} alt="cat" className="w-full h-full object-contain" /> : <CatAvatar />}
    </div>
    <div className="flex flex-col gap-y-2 h-full overflow-y-scroll">
      <div className="text-[24px] font-bold leading-9">{name}</div>
      <div>{description}</div>
    </div>
  </div>
);
