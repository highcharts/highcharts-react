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
import type { SeriesSplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A spline series is a special type of line series, where the segments between
 * the data points are smoothed.
 *
 * A ready-made chart with `chart.type` set to `spline`. Declare the data with
 * `<Spline.Series>`, or use `SplineSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Spline>
 *   <Spline.Series data={[1, 2, 3]} />
 * </Spline>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.spline
 */
declare function Spline(props: ICommonAttributes): React.JSX.Element;
declare namespace Spline {
    export { SplineSeries as Series };
    export var type: string;
}
type SeriesSplineConfig = Omit<SeriesSplineOptions, "type">;
/** Props for the `<SplineSeries />` component. */
export interface SplineSeriesProps {
    id?: SeriesSplineConfig["id"];
    index?: SeriesSplineConfig["index"];
    name?: SeriesSplineConfig["name"];
    className?: SeriesSplineConfig["className"];
    color?: SeriesSplineConfig["color"];
    events?: SeriesSplineConfig["events"];
    data?: SeriesSplineConfig["data"];
    options?: SeriesSplineConfig;
}
/**
 * A spline series is a special type of line series, where the segments between
 * the data points are smoothed.
 *
 * Renders the `spline` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <SplineSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.spline
 */
export declare function SplineSeries(_props: SplineSeriesProps): any;
export declare namespace SplineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Spline;
