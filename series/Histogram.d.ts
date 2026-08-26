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
import type { SeriesHistogramOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A histogram is a column series which represents the distribution of the data
 * set in the base series. Histogram splits data into bins and shows their
 * frequencies.
 *
 * A ready-made chart with `chart.type` set to `histogram`. Declare the data
 * with `<Histogram.Series>`, or use `HistogramSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Histogram>
 *   <Histogram.Series />
 * </Histogram>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.histogram
 */
declare function Histogram(props: ICommonAttributes): React.JSX.Element;
declare namespace Histogram {
    export { HistogramSeries as Series };
    export var type: string;
}
type SeriesHistogramConfig = Omit<SeriesHistogramOptions, "type">;
/** Props for the `<HistogramSeries />` component. */
export interface HistogramSeriesProps {
    id?: SeriesHistogramConfig["id"];
    index?: SeriesHistogramConfig["index"];
    name?: SeriesHistogramConfig["name"];
    className?: SeriesHistogramConfig["className"];
    color?: SeriesHistogramConfig["color"];
    events?: SeriesHistogramConfig["events"];
    options?: SeriesHistogramConfig;
}
/**
 * A histogram is a column series which represents the distribution of the data
 * set in the base series. Histogram splits data into bins and shows their
 * frequencies.
 *
 * Renders the `histogram` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <HistogramSeries />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.histogram
 */
export declare function HistogramSeries(_props: HistogramSeriesProps): any;
export declare namespace HistogramSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Histogram;
