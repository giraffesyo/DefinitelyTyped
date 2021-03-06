import * as React from 'react';
import { CSSModule } from '../index';

export interface InputGroupAddonProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: React.ElementType;
    cssModule?: CSSModule;
    addonType: 'prepend' | 'append';
}

declare class InputGroupAddon<T = {[key: string]: any}> extends React.Component<InputGroupAddonProps> {}
export default InputGroupAddon;
