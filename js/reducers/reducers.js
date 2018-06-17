/**
 * Created by 卓原 on 2018/5/18.
 * reducer的集合
 */
import mathReducer from './MathReducer';

import {combineReducers} from 'redux';
import changeColorReducer from './ChangeColorReducer';

export default combineReducers({
    mathReducer,
    changeColorReducer
})
