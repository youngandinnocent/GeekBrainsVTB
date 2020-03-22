import { Messanger } from './components/Messanger';
import { Profile } from 'pages/Profile';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Messanger
    },
    {
        path: '/profile',
        exact: true,
        component: Profile
    },
    {
        path: '/settings',
        exact: true,
        component: Messanger
    },
    {
        path: '/chats/:id([\\d]+)',
        exact: true,
        component: Messanger
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage,
    }
]