/**
 * Created by 卓原 on 2018/5/18.
 *
 */

import * as Types from '../actions/types';

const intvalue = {
    result: 0
};

export default function mathReducer(state = intvalue, action = {}) {
    switch (action.type) {
        case Types.ADD_TYPE:
            return {
                ...state,
                result: action.result + 1
            };
            break;
        case Types.MINUS_TYPE:
            return {
                ...state,
                result: action.result - 1
            };
            break;
        default:
            return state;
            break;
    }
}