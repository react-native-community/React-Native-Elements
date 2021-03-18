import React from 'react';
import { ViewStyle, StyleProp, TextStyle } from 'react-native';
export declare type SocialMediaType = 'facebook' | 'facebook-messenger' | 'whatsapp' | 'twitter' | 'google-plus-official' | 'google' | 'pinterest' | 'linkedin' | 'youtube' | 'vimeo' | 'tumblr' | 'instagram' | 'quora' | 'flickr' | 'foursquare' | 'wordpress' | 'stumbleupon' | 'github' | 'github-alt' | 'twitch' | 'medium' | 'soundcloud' | 'stack-overflow' | 'gitlab' | 'angellist' | 'codepen' | 'weibo' | 'vk';
export declare type SocialIconProps = {
    Component?: typeof React.Component;
    type?: SocialMediaType;
    button?: boolean;
    onPress?(): void;
    onLongPress?(): void;
    iconType?: string;
    iconStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    iconColor?: string;
    underlayColor?: string;
    title?: string;
    raised?: boolean;
    disabled?: boolean;
    loading?: boolean;
    activityIndicatorStyle?: object | any[];
    small?: string;
    iconSize?: string | number;
    light?: boolean;
    fontWeight?: string;
    fontStyle?: StyleProp<TextStyle>;
    fontFamily?: string;
} & typeof defaultProps;
declare const defaultProps: {
    raised: boolean;
    iconType: string;
    iconColor: string;
    iconSize: number;
    button: boolean;
};
declare const SocialIcon: React.FunctionComponent<SocialIconProps>;
export { SocialIcon };
declare const _default: React.FunctionComponent<Pick<SocialIconProps, "style" | "light" | "button" | "raised" | "disabled" | "iconStyle" | "onPress" | "onLongPress" | "underlayColor" | "type" | "Component" | "small" | "title" | "loading" | "iconType" | "fontFamily" | "iconColor" | "activityIndicatorStyle" | "iconSize" | "fontWeight" | "fontStyle">> | React.ForwardRefExoticComponent<SocialIconProps>;
export default _default;
