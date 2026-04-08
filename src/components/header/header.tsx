import { NavLink } from 'react-router';
import { Paths } from '../../constants';

export const Header = () => (
  <header>
    <nav>
      <NavLink to={Paths.MAIN}>Все котики</NavLink>
      <NavLink to={Paths.FAVORITE}>Любимые котики</NavLink>
    </nav>
  </header>
);
