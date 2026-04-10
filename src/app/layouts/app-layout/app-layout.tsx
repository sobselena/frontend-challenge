import { Outlet } from 'react-router';
import { Header } from '../../../components/header/header';

export const AppLayout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);
