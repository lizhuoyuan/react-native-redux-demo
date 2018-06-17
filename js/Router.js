/**
 * Created by 卓原 on 2018/6/17.
 *
 */
import {StackNavigator} from 'react-navigation';
import Main from './page/Main';
import Second from './page/Second';

const App = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    },
    Second: {
        screen: Second,
        navigationOptions: {
            header: null
        }
    },
}, {
    header: null

});

export default App;