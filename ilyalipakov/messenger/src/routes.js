import AppContainer from "./components/App";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";

export const routes = [
  {
    path: '/',
    exact: true,
    component: AppContainer
  },
  {
    path: '/profile',
    exact: true,
    component: Profile
  },
  {
    path: '/chats/:id([\\d]+)',
    exact: true,
    component: AppContainer
  },
  {
    path: '*',
    exact: false,
    component: NotFound
  },
];