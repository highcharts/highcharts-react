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
import type { SeriesXrangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * The X-range series displays ranges on the X axis, typically time intervals
 * with a start and end date.
 *
 * A ready-made chart with `chart.type` set to `xrange`. Declare the data with
 * `<XRange.Series>`, or use `XRangeSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock, Highcharts Gantt.
 *
 * @example
 * <XRange>
 *   <XRange.Series data={[1, 2, 3]} />
 * </XRange>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.xrange
 */
declare function XRange(props: ICommonAttributes): React.JSX.Element;
declare namespace XRange {
    export { XRangeSeries as Series };
    export var type: string;
}
type SeriesXrangeConfig = Omit<SeriesXrangeOptions, "type">;
/** Props for the `<XRangeSeries />` component. */
export interface XRangeSeriesProps {
    id?: SeriesXrangeConfig["id"];
    index?: SeriesXrangeConfig["index"];
    name?: SeriesXrangeConfig["name"];
    className?: SeriesXrangeConfig["className"];
    color?: SeriesXrangeConfig["color"];
    events?: SeriesXrangeConfig["events"];
    data?: SeriesXrangeConfig["data"];
    options?: SeriesXrangeConfig;
}
/**
 * The X-range series displays ranges on the X axis, typically time intervals
 * with a start and end date.
 *
 * Renders the `xrange` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock, Highcharts Gantt.
 *
 * @example
 * <Chart>
 *   <XRangeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.xrange
 */
export declare function XRangeSeries(_props: XRangeSeriesProps): any;
export declare namespace XRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default XRange;
