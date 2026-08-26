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
import type { SeriesBarOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A bar series is a special type of column series where the columns are
 * horizontal.
 *
 * A ready-made chart with `chart.type` set to `bar`. Declare the data with
 * `<Bar.Series>`, or use `BarSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Bar>
 *   <Bar.Series data={[1, 2, 3]} />
 * </Bar>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.bar
 */
declare function Bar(props: ICommonAttributes): React.JSX.Element;
declare namespace Bar {
    export { BarSeries as Series };
    export var type: string;
}
type SeriesBarConfig = Omit<SeriesBarOptions, "type">;
/** Props for the `<BarSeries />` component. */
export interface BarSeriesProps {
    id?: SeriesBarConfig["id"];
    index?: SeriesBarConfig["index"];
    name?: SeriesBarConfig["name"];
    className?: SeriesBarConfig["className"];
    color?: SeriesBarConfig["color"];
    events?: SeriesBarConfig["events"];
    data?: SeriesBarConfig["data"];
    options?: SeriesBarConfig;
}
/**
 * A bar series is a special type of column series where the columns are
 * horizontal.
 *
 * Renders the `bar` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <BarSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.bar
 */
export declare function BarSeries(_props: BarSeriesProps): any;
export declare namespace BarSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Bar;
