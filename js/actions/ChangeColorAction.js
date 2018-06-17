/**
 * Created by 卓原 on 2018/6/17.
 *
 */
import * as Types from './types';

export function changeColor(intvalue) {
    console.log('---> 变主题颜色 ' + intvalue);
    return {
        type: Types.changeColor,
        color: intvalue
    }
}