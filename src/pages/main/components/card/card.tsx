import { useState } from 'react';
import classNames from 'classnames';

import styles from './card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../../redux/reducers';

type Props = {
  url: string;
  id: string;
  isFavorite?: boolean;
};

export const Card = ({ url, id, isFavorite = false }: Props) => {
  const [isLiked, setIsLiked] = useState(isFavorite);
  const dispatch = useDispatch();

  function handleLike() {
    setIsLiked((prev) => !prev);
    dispatch(toggleFavorite({ id, url }));
  }
  return (
    <div className={styles.card}>
      <img src={url} alt="Котик" className={styles.image} />
      <button
        type="button"
        className={classNames(styles.heart, { [styles.liked]: isLiked })}
        onClick={handleLike}
        aria-label="Like"
      >
        <svg viewBox="0 0 24 24">
          <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4C8.24 4 9.91 4.81 11 6.08A6.1 6.1 0 0 1 11.35 6.53c.22.31.73.31.95 0 .12-.17.24-.32.35-.45C14.09 4.81 15.76 4 17.5 4A4.5 4.5 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.5L12 21.35Z" />
        </svg>
      </button>
    </div>
  );
};
