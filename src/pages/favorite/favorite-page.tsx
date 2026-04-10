import { CardsLayout } from '../../app/layouts/cards-layout';
import { useFavoriteSelector } from '../../redux/selectors';
import { Card } from '../main/components/card';

export const FavoritePage = () => {
  const favorites = useFavoriteSelector().favorites;

  return (
    <CardsLayout isEmpty={favorites.length === 0} emptyText="Нет любимых котиков :(">
      {favorites.map((cat) => (
        <Card key={cat.id} url={cat.url} id={cat.id} isFavorite={true} />
      ))}
    </CardsLayout>
  );
};
