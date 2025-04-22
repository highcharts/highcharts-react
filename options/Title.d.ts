/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-22
 *
 */
export type TitleProps = {
    align?: Highcharts.AlignValue;
    floating?: boolean;
    margin?: number;
    minScale?: number;
    style?: Highcharts.CSSObject;
    text?: string;
    useHTML?: boolean;
    verticalAlign?: Highcharts.VerticalAlignValue;
    x?: number;
    y?: number;
    children?: string | (string | number)[] | React.ReactElement | React.ReactElement[];
};
export declare function Title(props: TitleProps): any;
export declare namespace Title {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Title;
