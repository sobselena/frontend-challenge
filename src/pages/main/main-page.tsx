import { useGetCatsImagesQuery } from '../../redux/api';
import { Card } from './components/card';
import styles from './main-page.module.scss';

export const MainPage = () => {
  const { data: cats = [], isFetching, isError } = useGetCatsImagesQuery();

  return (
    <section className={styles.container}>
      {isError && <p className={styles.statusError}>Ошибка при загрузке котиков :(</p>}

      {!isFetching && !isError && cats.length === 0 && (
        <p className={styles.status}>Котики не найдены</p>
      )}

      <div className={styles.grid}>
        {cats.map((cat) => (
          <Card key={cat.id} url={cat.url} />
        ))}
      </div>

      {isFetching && <p className={styles.loader}>... загружаем еще котиков ...</p>}
    </section>
  );
};
