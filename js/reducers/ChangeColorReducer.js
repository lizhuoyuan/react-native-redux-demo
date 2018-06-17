/**
 * Created by 卓原 on 2018/6/17.
 *
 */

import * as Types from '../actions/types';

const intvalue = {
    color: 'green'
};

export default function changeColorReducer(state = intvalue, action = {}) {
    switch (action.type) {
        case Types.changeColor:
            console.log(action)
            return {
                ...state,
                color: action.color
            };
            break;

        default:
            return state;
            break;
    }
}