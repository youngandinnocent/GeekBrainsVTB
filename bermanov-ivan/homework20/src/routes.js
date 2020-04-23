import { LayoutRedux } from 'containers/LayoutContainer';
import { ProfileContainer } from 'containers/ProfileContainer';
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
        component: ProfileContainer
    },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]
