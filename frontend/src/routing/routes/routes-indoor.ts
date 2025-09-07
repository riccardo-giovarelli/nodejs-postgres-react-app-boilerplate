import { lazy } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { RoutesIndoorType } from './routes.type';

const Home = lazy(() => import('@/pages/home'));
const UserProfile = lazy(() => import('@/pages/user-profile'));

export const routesIndoor: readonly RoutesIndoorType[] = Object.freeze([
  {
    id: 'indor-home',
    path: '/',
    menuPath: '/',
    name: 'home',
    element: Home,
    labelLangCode: 'indoor_menu.home',
    icon: HomeIcon,
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
