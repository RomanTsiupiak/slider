import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { CatBreedResponseType } from '../../types';

const SLIDES_PAGE_LIMIT = 10;

export const useSlider = () => {
  const slides = useInfiniteQuery(
    ['slides'],
    ({ pageParam = 0 }) => {
      return axios.get<CatBreedResponseType[]>('https://api.thecatapi.com/v1/breeds', {
        params: { limit: SLIDES_PAGE_LIMIT, page: pageParam },
      });
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.data.length < SLIDES_PAGE_LIMIT ? undefined : allPages.length + 1;
      },
    }
  );

  return {
    slides: slides.data?.pages.reduce((acc: CatBreedResponseType[], item) => acc.concat(item['data']), []) || [],
    fetchNextPage: slides.fetchNextPage,
  };
};
