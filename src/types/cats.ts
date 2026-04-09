export type CatImageResponse = {
  id: string;
  width: number;
  height: number;
  url: string;
  breeds: Breed[];
};

export type Breed = {
  weight: {
    imperial: string;
    metric: string;
  };
  id: string;
  name: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url: string;
};

export type CatsFilters = Partial<{
  limit: number;
  page: number;
  order: 'ASC' | 'DESC' | 'RAND';
  has_breeds: 0 | 1;
  breed_ids: string;
  category_ids: string;
  sub_id: string;
}>;
