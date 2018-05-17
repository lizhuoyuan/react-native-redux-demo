/**
 * Created by 卓原 on 2018/5/17.
 *
 */
import * as Types from './types';


// 每一个action方法返回一个新的"state"对象,他就是应用当前的状态
export function add(intvalue) {
    console.log('---> MainAction add intvalue ' + intvalue);
    return {
        type: Types.ADD_TYPE,
        result: intvalue
    }
}

export function minus(intvalue){
    console.log('---> MainAction minus intvalue ' + intvalue);
    return {
        type: Types.MINUS_TYPE,
        result: intvalue
    }
}