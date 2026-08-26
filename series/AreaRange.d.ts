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
import type { SeriesArearangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * The area range series is a cartesian series with higher and lower values for
 * each point along an X axis, where the area between the values is shaded.
 *
 * A ready-made chart with `chart.type` set to `arearange`. Declare the data
 * with `<AreaRange.Series>`, or use `AreaRangeSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <AreaRange>
 *   <AreaRange.Series data={[1, 2, 3]} />
 * </AreaRange>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.arearange
 */
declare function AreaRange(props: ICommonAttributes): React.JSX.Element;
declare namespace AreaRange {
    export { AreaRangeSeries as Series };
    export var type: string;
}
type SeriesArearangeConfig = Omit<SeriesArearangeOptions, "type">;
/** Props for the `<AreaRangeSeries />` component. */
export interface AreaRangeSeriesProps {
    id?: SeriesArearangeConfig["id"];
    index?: SeriesArearangeConfig["index"];
    name?: SeriesArearangeConfig["name"];
    className?: SeriesArearangeConfig["className"];
    color?: SeriesArearangeConfig["color"];
    events?: SeriesArearangeConfig["events"];
    data?: SeriesArearangeConfig["data"];
    options?: SeriesArearangeConfig;
}
/**
 * The area range series is a cartesian series with higher and lower values for
 * each point along an X axis, where the area between the values is shaded.
 *
 * Renders the `arearange` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <AreaRangeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.arearange
 */
export declare function AreaRangeSeries(_props: AreaRangeSeriesProps): any;
export declare namespace AreaRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaRange;
