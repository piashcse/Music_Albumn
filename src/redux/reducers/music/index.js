import {MUSIC_ALBUMN, MUSIC_ALBUMN_FAILURE, MUSIC_ALBUMN_SUCCESS} from "../../constants/music";


const initialState = {
    data: [],
    isFetching: false,
};

export default function musicReducer(state = initialState, action) {
    switch (action.type) {
        case MUSIC_ALBUMN:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case MUSIC_ALBUMN_SUCCESS:
            return {
                ...state,
                data: action.result,
                isFetching: false
            };
        case MUSIC_ALBUMN_FAILURE:
            return {
                ...state,
                data: [],
                isFetching: false
            };
        default:
            return state;
    }
}