import AppContainer from "./components/App";
import ProfileContainer from "./Pages/Profile";
import NotFound from "./Pages/NotFound";

export const routes = [
  {
    path: '/',
    exact: true,
    component: AppContainer
  },
  {
    path: '/profiles/:id([\\d]+)',
    exact: true,
    component: ProfileContainer
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