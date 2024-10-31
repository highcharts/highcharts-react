/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
export type SubtitleProps = {
    align?: Highcharts.AlignValue;
    floating?: boolean;
    style?: Highcharts.CSSObject;
    text?: string;
    useHTML?: boolean;
    verticalAlign?: Highcharts.VerticalAlignValue;
    widthAdjust?: number;
    x?: number;
    y?: number;
    children?: string | (string | number)[] | React.ReactElement | React.ReactElement[];
};
export declare function Subtitle(props: SubtitleProps): any;
export declare namespace Subtitle {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Subtitle;
