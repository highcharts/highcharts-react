/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-06
 *
 */
export type TitleProps = {
    align?: Highcharts.AlignValue;
    floating?: boolean;
    margin?: number;
    style?: Highcharts.CSSObject;
    text?: string;
    useHTML?: boolean;
    verticalAlign?: Highcharts.VerticalAlignValue;
    widthAdjust?: number;
    x?: number;
    y?: number;
    children?: string | (string | number)[] | Element;
};
export declare function Title(props: TitleProps): any;
export declare namespace Title {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Title;
//# sourceMappingURL=Title.d.ts.map