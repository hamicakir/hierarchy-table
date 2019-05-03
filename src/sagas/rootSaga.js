import { all } from 'redux-saga/effects';

import cityListSaga from './cityListSaga';

export default function* rootSaga() {
    yield all([
        ...cityListSaga
    ])
}