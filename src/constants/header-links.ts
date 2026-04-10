import type { LinkConfig } from '../types/link-config';
import { Paths } from './paths';

export const BASE_HEADER_LINKS: LinkConfig[] = [
  {
    link: Paths.MAIN,
    text: 'Все котики',
    key: 'main',
  },
  {
    link: Paths.FAVORITE,
    text: 'Любимые котики',
    key: 'favorite',
  },
];
