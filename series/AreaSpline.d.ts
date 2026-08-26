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
import type { SeriesAreasplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * The area spline series is an area series where the graph between the points
 * is smoothed into a spline.
 *
 * A ready-made chart with `chart.type` set to `areaspline`. Declare the data
 * with `<AreaSpline.Series>`, or use `AreaSplineSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <AreaSpline>
 *   <AreaSpline.Series data={[1, 2, 3]} />
 * </AreaSpline>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.areaspline
 */
declare function AreaSpline(props: ICommonAttributes): React.JSX.Element;
declare namespace AreaSpline {
    export { AreaSplineSeries as Series };
    export var type: string;
}
type SeriesAreasplineConfig = Omit<SeriesAreasplineOptions, "type">;
/** Props for the `<AreaSplineSeries />` component. */
export interface AreaSplineSeriesProps {
    id?: SeriesAreasplineConfig["id"];
    index?: SeriesAreasplineConfig["index"];
    name?: SeriesAreasplineConfig["name"];
    className?: SeriesAreasplineConfig["className"];
    color?: SeriesAreasplineConfig["color"];
    events?: SeriesAreasplineConfig["events"];
    data?: SeriesAreasplineConfig["data"];
    options?: SeriesAreasplineConfig;
}
/**
 * The area spline series is an area series where the graph between the points
 * is smoothed into a spline.
 *
 * Renders the `areaspline` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <AreaSplineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.areaspline
 */
export declare function AreaSplineSeries(_props: AreaSplineSeriesProps): any;
export declare namespace AreaSplineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaSpline;
