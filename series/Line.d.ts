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
import type { SeriesLineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A line series displays information as a series of data points connected by
 * straight line segments.
 *
 * A ready-made chart with `chart.type` set to `line`. Declare the data with
 * `<Line.Series>`, or use `LineSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Line>
 *   <Line.Series data={[1, 2, 3]} />
 * </Line>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.line
 */
declare function Line(props: ICommonAttributes): React.JSX.Element;
declare namespace Line {
    export { LineSeries as Series };
    export var type: string;
}
type SeriesLineConfig = Omit<SeriesLineOptions, "type">;
/** Props for the `<LineSeries />` component. */
export interface LineSeriesProps {
    id?: SeriesLineConfig["id"];
    index?: SeriesLineConfig["index"];
    name?: SeriesLineConfig["name"];
    className?: SeriesLineConfig["className"];
    color?: SeriesLineConfig["color"];
    events?: SeriesLineConfig["events"];
    data?: SeriesLineConfig["data"];
    options?: SeriesLineConfig;
}
/**
 * A line series displays information as a series of data points connected by
 * straight line segments.
 *
 * Renders the `line` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <LineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.line
 */
export declare function LineSeries(_props: LineSeriesProps): any;
export declare namespace LineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Line;
