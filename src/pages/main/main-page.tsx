import { useGetCatsImagesQuery } from '../../redux/api';

export const MainPage = () => {
  const { data } = useGetCatsImagesQuery();
  console.log(data);
  return <section>Main Page</section>;
};
