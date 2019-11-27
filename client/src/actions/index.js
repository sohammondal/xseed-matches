import { SOME_CONSTANT } from '../constants';

export const someFakeAsyncAction = (dispatch) => {
    setTimeout(() => {
        dispatch({
            type: SOME_CONSTANT,
            payload: [4, 5, 6]
        })
    }, 2500);
} 