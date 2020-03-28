import { Layout } from 'components/Layout';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout
    },
    {
        path: '/chats/:id([\\d]+)',
        exact: true,
        component: Layout
    },
    {
        path: '/profile',
        exact: true,
        component: ProfilePage
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]