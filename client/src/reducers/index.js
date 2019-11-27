import { combineReducers } from "redux";
import { SOME_CONSTANT } from "../constants";

const someReducer = (state = [1, 2, 3], action) => {
    switch (action.type) {
        case SOME_CONSTANT:
            return [...state, action.payload];
        default:
            return state;
    }

}

export default combineReducers({
    some: someReducer
})