/**
 * Created by 卓原 on 2018/6/16.
 *
 */

import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Platform,
    StatusBar
} from 'react-native';

import * as ScreenUtil from "../utils/ScreenUtil";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const NAV_BAR_HEIGHT_ANDROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;

const StatusBarShape = {
    barStyle: PropTypes.oneOf(['light-content', 'default', 'dark-content']),
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string,
};

class NavigationBar extends React.Component {

    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarShape),
        titleLayoutStyle: View.propTypes.style,
        leftTextStyle: View.propTypes.style,
        leftButton: PropTypes.element,
        leftTextStyle: View.propTypes.style,
        showLeft: PropTypes.bool,
        rightButton: PropTypes.element,
        rightTextStyle: View.propTypes.style,
        showRight: PropTypes.bool
    };

    static defaultProps = {
        statusBar: {
            barStyle: 'default',
            hidden: false,
        },
        showLeft: true,
        showRight: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false,

        }
    }

    render() {
        let {color} = this.props;
        let leftButton = this._renderLeft();
        let rightButton = this._renderRight();
        let statusBar = !this.props.statusBar.hidden ? <View>
            <StatusBar {...this.props.statusBar}/></View> : null;
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={[styles.titleStyle, this.props.titleLayoutStyle]}>{this.props.title}</Text>;
        let content = <View style={styles.content}>
            {leftButton}
            <View style={styles.titleView}>{titleView}</View>
            {rightButton}
        </View>;
        return (
            <View style={[styles.container, {backgroundColor: color}, this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }

    _renderLeft() {
        let {leftButton, leftTextStyle, showLeft, navigation, onLeftClick} = this.props;
        if (!showLeft) {
            return null;
        }
        if (leftButton == null) {
            return (
                <TouchableOpacity onPress={() => {
                    if (onLeftClick) {
                        onLeftClick();
                    } else {
                        navigation.goBack();
                    }
                }}>
                    <View style={styles.leftContainer}>
                        <Text style={[styles.leftText, leftTextStyle]}>返回</Text>
                    </View>
                </TouchableOpacity>)
        }
        return leftButton;
    }

    _renderRight() {
        let {rightButton, rightTextStyle, showRight, onRightClick} = this.props;
        if (!showRight) {
            return null;
        }
        if (rightButton == null) {
            return (
                <TouchableOpacity onPress={() => {
                    if (onRightClick) {
                        onRightClick()
                    }
                }}>
                    <View>
                        <Text style={[styles.rightText, rightTextStyle]}>更多</Text>
                    </View>
                </TouchableOpacity>)
        }
        return rightButton;
    }
}

/**
 * //selector：这是你自己编写的一个函数。这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props
 * @param store
 * @returns {{color: *}}
 */
function changeColor(store) {
    return {
        color: store.changeColorReducer.color
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green'
    },
    content: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },
    titleView: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0,
    },
    titleStyle: {
        fontSize: ScreenUtil.setSpText(28),
        color: 'white'

    },
    leftText: {
        color: 'white'
    },
    rightText: {
        color: 'white'
    },
    leftContainer: {
        marginLeft: ScreenUtil.scaleSize(20)
    }
});

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(selector)(App) 中；
/**
 * 把这个组件用connect包裹住就能拿到store。
 注意export default已经拿到下面来了，上面的class前面的导出要删掉
 */
export default connect(changeColor)(NavigationBar);
