import { useState, useRef, useCallback } from 'react';
import { useGetCatsImagesQuery } from '../../redux/api';

import { Card } from '../main/components/card';
import { CardsLayout } from '../../app/layouts/cards-layout';
import styles from './main-page.module.scss';
import { useFavoriteSelector } from '../../redux/selectors';

export const MainPage = () => {
  const [page, setPage] = useState(0);

  const { data = [], isFetching, isError } = useGetCatsImagesQuery({ page });

  const observer = useRef<IntersectionObserver | null>(null);
  const favoriteCats = useFavoriteSelector().favorites;
  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching || isError) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching, isError]
  );

  return (
    <>
      {isError && <p className={styles.statusError}>Ошибка при загрузке котиков :(</p>}

      <CardsLayout>
        {data.map((cat, index) => {
          const isLast = index === data.length - 1;

          const card = (
            <Card
              key={cat.id}
              url={cat.url}
              id={cat.id}
              isFavorite={favoriteCats.some((favoriteCat) => favoriteCat.id === cat.id)}
            />
          );

          if (isLast) {
            return (
              <div ref={lastElementRef} key={cat.id}>
                {card}
              </div>
            );
          }

          return card;
        })}
      </CardsLayout>

      {isFetching && <p className={styles.loader}>... загружаем еще котиков ...</p>}
    </>
  );
};
