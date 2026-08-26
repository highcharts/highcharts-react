/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
/** Props for the `<Title />` component. */
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
    children?: React.ReactNode;
};
/**
 * The chart's main title.
 *
 * Sets `title` on the parent chart. The children set `text`.
 *
 * @example
 * <Chart>
 *   <Title>Monthly sales</Title>
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/title
 */
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
