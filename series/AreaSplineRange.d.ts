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
import type { SeriesAreasplinerangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * The area spline range is a cartesian series type with higher and lower Y
 * values along an X axis. The area inside the range is colored, and the graph
 * outlining the area is a smoothed spline.
 *
 * A ready-made chart with `chart.type` set to `areasplinerange`. Declare the
 * data with `<AreaSplineRange.Series>`, or use `AreaSplineRangeSeries` inside
 * a plain `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <AreaSplineRange>
 *   <AreaSplineRange.Series data={[1, 2, 3]} />
 * </AreaSplineRange>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.areasplinerange
 */
declare function AreaSplineRange(props: ICommonAttributes): React.JSX.Element;
declare namespace AreaSplineRange {
    export { AreaSplineRangeSeries as Series };
    export var type: string;
}
type SeriesAreasplinerangeConfig = Omit<SeriesAreasplinerangeOptions, "type">;
/** Props for the `<AreaSplineRangeSeries />` component. */
export interface AreaSplineRangeSeriesProps {
    id?: SeriesAreasplinerangeConfig["id"];
    index?: SeriesAreasplinerangeConfig["index"];
    name?: SeriesAreasplinerangeConfig["name"];
    className?: SeriesAreasplinerangeConfig["className"];
    color?: SeriesAreasplinerangeConfig["color"];
    events?: SeriesAreasplinerangeConfig["events"];
    data?: SeriesAreasplinerangeConfig["data"];
    options?: SeriesAreasplinerangeConfig;
}
/**
 * The area spline range is a cartesian series type with higher and lower Y
 * values along an X axis. The area inside the range is colored, and the graph
 * outlining the area is a smoothed spline.
 *
 * Renders the `areasplinerange` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <AreaSplineRangeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.areasplinerange
 */
export declare function AreaSplineRangeSeries(_props: AreaSplineRangeSeriesProps): any;
export declare namespace AreaSplineRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaSplineRange;
