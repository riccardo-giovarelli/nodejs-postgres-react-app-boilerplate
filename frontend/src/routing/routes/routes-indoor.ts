import { lazy } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { RoutesIndoorType } from './routes.type';

const Dashboard = lazy(() => import('@/pages/dashboard'));
const UserProfile = lazy(() => import('@/pages/user-profile'));

export const routesIndoor: readonly RoutesIndoorType[] = Object.freeze([
  {
    id: 'indor-dashboard',
    path: '/',
    menuPath: '/',
    name: 'dashboard',
    element: Dashboard,
    labelLangCode: 'indoor_menu.dashboard',
    icon: DashboardIcon,
  },
  {
    id: 'indor-user-profile',
    path: '/profile',
    menuPath: '/profile',
    name: 'profile',
    element: UserProfile,
    labelLangCode: 'indoor_menu.user_profile',
    hideInMenu: true,
  },
]);
