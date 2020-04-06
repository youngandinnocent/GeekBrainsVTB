import { createStore, applyMiddleware, compose } from 'redux';
// import { rootReducer } from 'reducers';
// import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { loggerMiddleware } from 'middlewares/logger';
import { robotMiddleware } from 'middlewares/robot';
import { initReducer } from 'reducers';

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage
};

export const initStore = () => {
    const initialStore = {};
    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        compose(
            applyMiddleware(loggerMiddleware, robotMiddleware, routerMiddleware(history)),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    const persistor = persistStore(store);

    return { store, persistor };
};

// export const store = createStore(initReducer(history), applyMiddleware(loggerMiddleware, robotMiddleware, routerMiddleware(history)));

// export const store = createStore(rootReducer, applyMiddleware(logger));
// export const store = createStore(rootReducer, applyMiddleware(loggerMiddleware, robotMiddleware));
// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());