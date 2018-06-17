/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';


import {Provider} from 'react-redux';
import Store from './js/store/Store';
import Main from './js/Router';

const store = Store();


type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);

    }

    //Provider是让我们决定使用redux的一个原因，它可以让我们操作容器内的组件却不需要手动传递内容
    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );
    }
}
