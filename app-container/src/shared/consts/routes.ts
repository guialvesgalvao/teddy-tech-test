import IconNavOverview from '@/components/icons/icon-nav-overview';
import { Home, User, LayoutDashboard  } from 'lucide-react';

interface IRoute {
  name: string;
  icon: React.FC;
  path: string;
  showInSidebar: boolean;
}


export const ROUTES: IRoute[] = [
  {
    name: 'Home',
    icon: Home,
    path: '/',
    showInSidebar: true,
  },
  {
    name: 'Login',
    icon: IconNavOverview,
    path: '/auth',
    showInSidebar: false,
  },
  {
    name: 'Clientes',
    icon: User,
    path: '/customers-selecteds',
    showInSidebar: true,
  },
  {
    name: 'Produtos',
    icon: LayoutDashboard,
    path: '/products',
    showInSidebar: true,
  },
];
