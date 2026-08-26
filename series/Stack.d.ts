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
import type { SeriesStackOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * This option allows grouping series in a stacked chart. The stack option can
 * be a string or anything else, as long as the grouped series' stack options
 * match each other after conversion into a string.
 *
 * A ready-made chart with `chart.type` set to `stack`. Declare the data with
 * `<Stack.Series>`, or use `StackSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Stack>
 *   <Stack.Series />
 * </Stack>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.stack
 */
declare function Stack(props: ICommonAttributes): React.JSX.Element;
declare namespace Stack {
    export { StackSeries as Series };
    export var type: string;
}
type SeriesStackConfig = Omit<SeriesStackOptions, "type">;
/** Props for the `<StackSeries />` component. */
export interface StackSeriesProps {
    id?: SeriesStackConfig["id"];
    index?: SeriesStackConfig["index"];
    name?: SeriesStackConfig["name"];
    className?: SeriesStackConfig["className"];
    color?: SeriesStackConfig["color"];
    events?: SeriesStackConfig["events"];
    options?: SeriesStackConfig;
}
/**
 * This option allows grouping series in a stacked chart. The stack option can
 * be a string or anything else, as long as the grouped series' stack options
 * match each other after conversion into a string.
 *
 * Renders the `stack` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <StackSeries />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.stack
 */
export declare function StackSeries(_props: StackSeriesProps): any;
export declare namespace StackSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Stack;
