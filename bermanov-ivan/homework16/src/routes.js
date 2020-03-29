import { LayoutRedux } from 'containers/LayoutContainer';
import { ProfileRedux } from 'containers/ProfileContainer';
import { NotFoundPage } from 'pages/NotFoundPage';

export const routes = [
    {
        path: '/',
        exact: true,
        component: LayoutRedux
    },
    {
        path: '/chats/:id([\\d]+)',
        exact: true,
        component: LayoutRedux
    },
    {
        path: '/profile',
        exact: true,
        component: ProfileRedux
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]
