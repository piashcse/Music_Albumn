import {MUSIC_ALBUMN, MUSIC_ALBUMN_FAILURE, MUSIC_ALBUMN_SUCCESS} from "../../constants/music";
import { takeEvery, call, put } from 'redux-saga/effects';
import ApiService from '../../../networks/ApiService';
import AxiosService from '../../../networks/AxiosService';


function* callMusicAlbumnApi(action) {
    try {
        const response = yield call(AxiosService.getServiceData, ApiService.TEST_API, {});
        const result = response.data;
        yield put({ type: MUSIC_ALBUMN_SUCCESS, result });
    } catch (error) {
        yield put({ type: MUSIC_ALBUMN_FAILURE });
    }
}

export const musicAppSaga = [
    takeEvery(MUSIC_ALBUMN, callMusicAlbumnApi)
];