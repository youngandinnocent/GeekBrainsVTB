import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from 'reducers';
import {createBrowserHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import {initReducer} from 'reducers';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {messageMiddleware} from 'middleware/messageMiddleware';
import {activeChatMiddleware} from 'middleware/activeChatMiddleware'

export const history = createBrowserHistory();

const persistConfig = {
    key: 'root',
    storage,
};

export function initStore(){
    const initialStore = {};

    const store = createStore(
        persistReducer(persistConfig, initReducer(history)),
        initialStore,
        compose(
            applyMiddleware(logger, messageMiddleware, activeChatMiddleware, routerMiddleware(history)),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        )
    );

    const persistor = persistStore(store);
    return {store, persistor};
}