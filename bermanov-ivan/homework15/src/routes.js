import { Layout } from 'components/Layout';
import { ProfilePage } from 'pages/ProfilePage';
// import { AboutPage } from 'pages/AboutPage';
// import { ContactsPage } from 'pages/ContactsPage';
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
    // {
    //     path: '/about',
    //     exact: true,
    //     component: AboutPage
    // },
    // {
    //     path: '/contacts',
    //     exact: true,
    //     component: ContactsPage
    // },
    {
        path: '*',
        exact: false,
        component: NotFoundPage
    }
]