import classNames from 'classnames';
import type { ReactNode } from 'react';
import { NavLink } from 'react-router';
import styles from './app-nav-link.module.scss';

type Props = {
  link: string;
  children: ReactNode;
};
export const AppNavLink = ({ link, children }: Props) => (
  <NavLink
    to={link}
    className={({ isActive }: { isActive: boolean }) =>
      classNames(styles.link, { [styles.active]: isActive })
    }
  >
    {children}
  </NavLink>
);
