import React from 'react';
import { TextProps as TextProperties, TextStyle, StyleProp } from 'react-native';
import { Theme } from '../config/theme';
export declare type TextProps = TextProperties & {
    style?: StyleProp<TextStyle>;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h1Style?: StyleProp<TextStyle>;
    h2Style?: StyleProp<TextStyle>;
    h3Style?: StyleProp<TextStyle>;
    h4Style?: StyleProp<TextStyle>;
    theme?: Theme;
};
declare const TextElement: React.FunctionComponent<TextProps>;
export { TextElement };
declare const _default: React.FunctionComponent<Pick<TextProps, "style" | "onLayout" | "testID" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "allowFontScaling" | "ellipsizeMode" | "lineBreakMode" | "numberOfLines" | "onTextLayout" | "onPress" | "onLongPress" | "nativeID" | "maxFontSizeMultiplier" | "adjustsFontSizeToFit" | "minimumFontScale" | "suppressHighlighting" | "selectable" | "selectionColor" | "textBreakStrategy" | "dataDetectorType" | "h1" | "h2" | "h3" | "h4" | "h1Style" | "h2Style" | "h3Style" | "h4Style">> | React.ForwardRefExoticComponent<TextProps>;
export default _default;
