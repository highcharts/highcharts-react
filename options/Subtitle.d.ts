/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
/** Props for the `<Subtitle />` component. */
export type SubtitleProps = {
    align?: Highcharts.AlignValue;
    className?: string;
    floating?: boolean;
    style?: Highcharts.CSSObject;
    text?: string;
    useHTML?: boolean;
    verticalAlign?: Highcharts.VerticalAlignValue;
    x?: number;
    y?: number;
    children?: React.ReactNode;
};
/**
 * The chart's subtitle. This can be used both to display a subtitle below the
 * main title, and to display random text anywhere in the chart. The subtitle
 * can be updated after chart initialization through the `Chart.setTitle`
 * method.
 *
 * Sets `subtitle` on the parent chart. The children set `text`.
 *
 * @example
 * import { Chart, Subtitle } from '@highcharts/react';
 *
 * <Chart>
 *   <Subtitle>Source: internal data</Subtitle>
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/subtitle
 */
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
