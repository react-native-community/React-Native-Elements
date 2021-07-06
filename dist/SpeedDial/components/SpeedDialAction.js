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
import { View, Text, StyleSheet } from 'react-native';
import { withTheme } from '../../config';
import { FAB } from '../../FAB/index';
export const SpeedDialAction = withTheme((_a) => {
    var { title, titleStyle } = _a, actionProps = __rest(_a, ["title", "titleStyle"]);
    return (<View style={styles.action}>
        {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
        <FAB {...actionProps} size="small" style={[actionProps.style]}/>
      </View>);
}, 'SpeedDialAction');
const styles = StyleSheet.create({
    title: {
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 5,
        paddingHorizontal: 12,
        paddingVertical: 6,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
    },
    action: {
        marginBottom: 16,
        marginRight: 24,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
});
