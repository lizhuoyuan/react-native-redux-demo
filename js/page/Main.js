import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
} from 'react-native';
import {connect} from 'react-redux'
import {add, minus} from '../actions/MathAction'
import {changeColor} from '../actions/ChangeColorAction';
import NavigationBar from '../common/NavigationBar';

const {width} = Dimensions.get('window');

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let arr = [1, [2, [3, 4, [5, 6, ['a', 'b', 'c']]]]];
        console.log(this.toOne(arr))
    }

    /**
     * 多维数组转一维 reduce
     */
    toOne(array) {
        return array.reduce(
            (begin, current) =>
                begin.concat(Array.isArray(current) ? this.toOne(current) : current), []
        )
    }

    deepFlatten = arr =>
        arr.reduce((a, v) => a.concat(Array.isArray(v) ? this.deepFlatten(v) : v), []);

    render() {
        const {dispatch, result} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <NavigationBar title={
                    'Main'
                } showLeft={false}
                />
                <TouchableHighlight style={styles.itemView} underlayColor="red" onPress={() => {
                    dispatch(add(result))
                }}>
                    <Text style={styles.itemText}>
                        点击我就+1
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.itemView} underlayColor="red" onPress={() => {
                    dispatch(minus(result))
                }}>
                    <Text style={styles.itemText}>
                        点击我就-1
                    </Text>
                </TouchableHighlight>


                <Text style={{paddingTop: 10, color: 'red'}}>
                    当前的Num值是:{result}
                </Text>

                <Text style={{paddingTop: 10}} onPress={() => {
                    dispatch(changeColor('red'));
                }}>
                    变红
                </Text>
                <Text style={{paddingTop: 10}} onPress={() => {
                    dispatch(changeColor('blue'));
                }}>
                    变蓝
                </Text>

                <Text style={{paddingTop: 10}} onPress={() => {
                    navigate('Second')
                }}>
                    跳转到新页面
                </Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 20,
    },
    itemView: {
        backgroundColor: 'grey',
        height: 44,
        width: width,
        justifyContent: 'center',
        marginTop: 10,
    },
    itemText: {
        fontSize: 15,
        color: '#ffffff',
        textAlign: 'left',
        marginLeft: 20,
    },
});

//selector：这是你自己编写的一个函数。这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props。
function selector(store) {
    return {
        result: store.mathReducer.result,
        color: store.changeColorReducer.color
    }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(selector)(App) 中；
/**
 * 把这个组件用connect包裹住就能拿到store。
 注意export default已经拿到下面来了，上面的class前面的导出要删掉，Main是就是class的名字。
 mathReducer就是reducer集合里的名字。
 */
export default connect(selector)(Main);