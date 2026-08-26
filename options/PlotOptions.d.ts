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
/** Props for the `<PlotOptions />` component. */
export type PlotOptionsProps = Highcharts.PlotOptions;
/**
 * The plotOptions is a wrapper object for config objects for each series type.
 * The config objects for each series can also be overridden for each series
 * item as given in the series array.
 *
 * Sets `plotOptions` on the parent chart.
 *
 * @example
 * <Chart>
 *   <PlotOptions series={{ animation: false }} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions
 */
export declare function PlotOptions(props: PlotOptionsProps): any;
export declare namespace PlotOptions {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default PlotOptions;
