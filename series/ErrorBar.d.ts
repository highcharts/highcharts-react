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
import React from "react";
import type { SeriesErrorbarOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Error bars are a graphical representation of the variability of data and are
 * used on graphs to indicate the error, or uncertainty in a reported
 * measurement.
 *
 * A ready-made chart with `chart.type` set to `errorbar`. Declare the data
 * with `<ErrorBar.Series>`, or use `ErrorBarSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <ErrorBar>
 *   <ErrorBar.Series data={[1, 2, 3]} />
 * </ErrorBar>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.errorbar
 */
declare function ErrorBar(props: ICommonAttributes): React.JSX.Element;
declare namespace ErrorBar {
    export { ErrorBarSeries as Series };
    export var type: string;
}
type SeriesErrorbarConfig = Omit<SeriesErrorbarOptions, "type">;
/** Props for the `<ErrorBarSeries />` component. */
export interface ErrorBarSeriesProps {
    id?: SeriesErrorbarConfig["id"];
    index?: SeriesErrorbarConfig["index"];
    name?: SeriesErrorbarConfig["name"];
    className?: SeriesErrorbarConfig["className"];
    color?: SeriesErrorbarConfig["color"];
    events?: SeriesErrorbarConfig["events"];
    data?: SeriesErrorbarConfig["data"];
    options?: SeriesErrorbarConfig;
}
/**
 * Error bars are a graphical representation of the variability of data and are
 * used on graphs to indicate the error, or uncertainty in a reported
 * measurement.
 *
 * Renders the `errorbar` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <ErrorBarSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.errorbar
 */
export declare function ErrorBarSeries(_props: ErrorBarSeriesProps): any;
export declare namespace ErrorBarSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ErrorBar;
