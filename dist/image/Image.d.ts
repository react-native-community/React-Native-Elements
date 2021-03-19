import React from 'react';
import { Animated, Image as ImageNative, ImageProps as RNImageProps, ViewStyle, StyleProp } from 'react-native';
export declare type ImageProps = RNImageProps & {
    Component?: typeof React.Component;
    onPress?(): void;
    onLongPress?(): void;
    ImageComponent?: React.ComponentType<any>;
    PlaceholderContent?: React.ReactElement<any>;
    containerStyle?: StyleProp<ViewStyle>;
    placeholderStyle?: StyleProp<ViewStyle>;
    transition?: boolean;
    transitionDuration?: number;
};
declare type ImageState = {
    placeholderOpacity: Animated.Value;
};
declare class Image extends React.Component<ImageProps, ImageState> {
    static getSize: typeof ImageNative.getSize;
    static getSizeWithHeaders: typeof ImageNative.getSizeWithHeaders;
    static prefetch: typeof ImageNative.prefetch;
    static abortPrefetch: typeof ImageNative.abortPrefetch;
    static queryCache: typeof ImageNative.queryCache;
    static resolveAssetSource: typeof ImageNative.resolveAssetSource;
    state: {
        placeholderOpacity: Animated.Value;
    };
    onLoad: (e: any) => void;
    render(): JSX.Element;
}
export { Image };
declare const _default: React.FunctionComponent<Pick<ImageProps, "style" | "onLayout" | "onError" | "onLoad" | "onLoadEnd" | "onLoadStart" | "progressiveRenderingEnabled" | "borderRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "resizeMode" | "resizeMethod" | "source" | "loadingIndicatorSource" | "testID" | "defaultSource" | "blurRadius" | "capInsets" | "onProgress" | "onPartialLoad" | "fadeDuration" | "width" | "height" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "accessibilityRole" | "accessibilityState" | "accessibilityHint" | "accessibilityValue" | "onAccessibilityAction" | "accessibilityLiveRegion" | "importantForAccessibility" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "onPress" | "onLongPress" | "Component" | "containerStyle" | "ImageComponent" | "PlaceholderContent" | "placeholderStyle" | "transition" | "transitionDuration">> | React.ForwardRefExoticComponent<ImageProps>;
export default _default;