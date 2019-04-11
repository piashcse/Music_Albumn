import { all } from 'redux-saga/effects';
import { musicAppSaga } from './music';

export default function* rootSaga() {
    yield all([
        ...musicAppSaga,
    ])
}