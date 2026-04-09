import { useState, useRef, useCallback } from 'react';
import { useGetCatsImagesQuery } from '../../redux/api';
import { Card } from './components/card';
import styles from './main-page.module.scss';

export const MainPage = () => {
  const [page, setPage] = useState(0);

  const { data = [], isFetching, isError } = useGetCatsImagesQuery({ page });

  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (isFetching) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [isFetching]
  );

  return (
    <section className={styles.container}>
      {isError && <p className={styles.statusError}>Ошибка при загрузке котиков :(</p>}

      <div className={styles.grid}>
        {data.map((cat, index) => {
          if (index === data.length - 1) {
            return (
              <div ref={lastElementRef} key={cat.id}>
                <Card url={cat.url} />
              </div>
            );
          }

          return <Card key={cat.id} url={cat.url} />;
        })}
      </div>

      {isFetching && <p className={styles.loader}>... загружаем еще котиков ...</p>}
    </section>
  );
};
