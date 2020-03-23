import { LayoutRedux } from 'containers/LayoutContainer';
import { AboutPage } from 'pages/AboutPage';
import { ContactsPage } from 'pages/ContactsPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfileRedux } from 'components/Profile';

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
        path: '/about',
        exact: true,
        component: AboutPage
    },
    {
        path: '/contacts',
        exact: true,
        component: ContactsPage
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