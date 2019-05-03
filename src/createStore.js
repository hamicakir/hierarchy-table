import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleware from "redux-saga";

import rootReducer from './reducers/rootReducer'
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = function configureStore() {
    const reduxStore = createStore(rootReducer, applyMiddleware(sagaMiddleware),);
    sagaMiddleware.run(rootSaga);
    return reduxStore;
};

export default store();