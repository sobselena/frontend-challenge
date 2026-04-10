import { BASE_HEADER_LINKS } from '../../constants';
import styles from './header.module.scss';
import { AppNavLink } from '../app-nav-link/app-nav-link';

export const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {BASE_HEADER_LINKS.map(({ link, text, key }) => (
          <li key={key} className={styles.item}>
            <AppNavLink link={link}>{text}</AppNavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
