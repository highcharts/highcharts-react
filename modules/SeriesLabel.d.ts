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

/** Props for the `<SeriesLabel />` component. */
export type SeriesLabelProps = {};
/**
 * Places a label next to each series, as an alternative to a legend for charts
 * where the series are easy to tell apart by position. Configured through
 * `plotOptions.series.label`.
 *
 * Importing the component also loads the Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <SeriesLabel />
 * </Chart>
 */
export declare function SeriesLabel(props: SeriesLabelProps): any;
export declare namespace SeriesLabel {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default SeriesLabel;
