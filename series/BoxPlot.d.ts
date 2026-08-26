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
import type { SeriesBoxplotOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A box plot is a convenient way of depicting groups of data through their
 * five-number summaries: the smallest observation (sample minimum), lower
 * quartile (Q1), median (Q2), upper quartile (Q3), and largest observation
 * (sample maximum).
 *
 * A ready-made chart with `chart.type` set to `boxplot`. Declare the data with
 * `<BoxPlot.Series>`, or use `BoxPlotSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <BoxPlot>
 *   <BoxPlot.Series data={[1, 2, 3]} />
 * </BoxPlot>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.boxplot
 */
declare function BoxPlot(props: ICommonAttributes): React.JSX.Element;
declare namespace BoxPlot {
    export { BoxPlotSeries as Series };
    export var type: string;
}
type SeriesBoxplotConfig = Omit<SeriesBoxplotOptions, "type">;
/** Props for the `<BoxPlotSeries />` component. */
export interface BoxPlotSeriesProps {
    id?: SeriesBoxplotConfig["id"];
    index?: SeriesBoxplotConfig["index"];
    name?: SeriesBoxplotConfig["name"];
    className?: SeriesBoxplotConfig["className"];
    color?: SeriesBoxplotConfig["color"];
    events?: SeriesBoxplotConfig["events"];
    data?: SeriesBoxplotConfig["data"];
    options?: SeriesBoxplotConfig;
}
/**
 * A box plot is a convenient way of depicting groups of data through their
 * five-number summaries: the smallest observation (sample minimum), lower
 * quartile (Q1), median (Q2), upper quartile (Q3), and largest observation
 * (sample maximum).
 *
 * Renders the `boxplot` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <BoxPlotSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.boxplot
 */
export declare function BoxPlotSeries(_props: BoxPlotSeriesProps): any;
export declare namespace BoxPlotSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default BoxPlot;
