var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Platform, StyleSheet, TouchableHighlight, View, } from 'react-native';
import { withTheme } from '../config';
import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';
const ListItem = Object.assign((props) => {
    const { containerStyle, onPress, onLongPress, Component = onPress || onLongPress ? TouchableHighlight : View, disabled, disabledStyle, bottomDivider, topDivider, pad = 16, linearGradientProps, ViewComponent = View, theme, children } = props, attributes = __rest(props, ["containerStyle", "onPress", "onLongPress", "Component", "disabled", "disabledStyle", "bottomDivider", "topDivider", "pad", "linearGradientProps", "ViewComponent", "theme", "children"]);
    if (props.linearGradientProps && !props.ViewComponent) {
        console.error("You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}");
    }
    return (<Component {...attributes} onPress={onPress} onLongPress={onLongPress} disabled={disabled}>
      <PadView Component={ViewComponent} {...linearGradientProps} style={StyleSheet.flatten([
        Object.assign(Object.assign({}, Platform.select({
            ios: {
                padding: 14,
            },
            default: {
                padding: 16,
            },
        })), { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.white, borderColor: theme.colors.divider }),
        topDivider && { borderTopWidth: StyleSheet.hairlineWidth },
        bottomDivider && { borderBottomWidth: StyleSheet.hairlineWidth },
        containerStyle,
        disabled && disabledStyle,
    ])} pad={pad}>
        {children}
      </PadView>
    </Component>);
});
class PadView extends React.Component {
    constructor(props) {
        super(props);
        this.setNativeProps = (nativeProps) => {
            this._root.current.setNativeProps(nativeProps);
        };
        this._root = React.createRef();
    }
    render() {
        const _a = this.props, { children, pad, Component } = _a, props = __rest(_a, ["children", "pad", "Component"]);
        const childrens = React.Children.toArray(children);
        const { length } = childrens;
        const Container = Component || View;
        return (<Container {...props} ref={this._root} testID="padView">
        {React.Children.map(childrens, (child, index) => child && [
            child,
            index !== length - 1 && <View style={{ paddingLeft: pad }}/>,
        ])}
      </Container>);
    }
}
export { ListItem };
const ThemedListItem = Object.assign(withTheme(ListItem, 'ListItem'), {
    Chevron: ListItemChevron,
    Content: ListItemContent,
    Input: ListItemInput,
    Title: ListItemTitle,
    Subtitle: ListItemSubtitle,
    CheckBox: ListItemCheckBox,
    ButtonGroup: ListItemButtonGroup,
});
export default ThemedListItem;
