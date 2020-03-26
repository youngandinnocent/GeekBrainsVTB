import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from 'reducers';
import logger from 'redux-logger';
import { apiMiddleware } from 'redux-api-middleware';
import { loggerMiddleware } from 'middlewares/logger';
import { botMiddleware } from 'middlewares/bot';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { chatActiveMiddleware } from './middlewares/chatActive'
import { initReducer } from 'reducers';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['chats', 'router'],
};

export function initStore() {
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        compose(
            applyMiddleware(loggerMiddleware, botMiddleware, chatActiveMiddleware, apiMiddleware, routerMiddleware(history)),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );

    const persistor = persistStore(store);
    return { store, persistor };
}
