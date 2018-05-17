/**
 * Created by 卓原 on 2018/5/18.
 * 固定写法
 */


import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from '../reducers/reducers';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function Store(initialState) {
    const store = createStoreWithMiddleware(Reducer, initialState);
    return store;
}