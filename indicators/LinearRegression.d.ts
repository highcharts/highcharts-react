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
import type { SeriesLinearregressionOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Linear regression indicator. This series requires `linkedTo` option to be
 * set.
 *
 * A ready-made chart with `chart.type` set to `linearregression`. Declare the
 * data with `<LinearRegression.Series>`, or use `LinearRegressionSeries`
 * inside a plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <LinearRegression>
 *   <LinearRegression.Series options={{ linkedTo: 'prices' }} />
 * </LinearRegression>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.linearregression
 */
declare function LinearRegression(props: ICommonAttributes): React.JSX.Element;
declare namespace LinearRegression {
    export { LinearRegressionSeries as Series };
    export var type: string;
}
type SeriesLinearregressionConfig = Omit<SeriesLinearregressionOptions, "type">;
/** Props for the `<LinearRegressionSeries />` component. */
export interface LinearRegressionSeriesProps {
    id?: SeriesLinearregressionConfig["id"];
    index?: SeriesLinearregressionConfig["index"];
    name?: SeriesLinearregressionConfig["name"];
    className?: SeriesLinearregressionConfig["className"];
    color?: SeriesLinearregressionConfig["color"];
    events?: SeriesLinearregressionConfig["events"];
    options?: SeriesLinearregressionConfig;
}
/**
 * Linear regression indicator. This series requires `linkedTo` option to be
 * set.
 *
 * Renders the `linearregression` series type inside a chart component. The
 * most common options are available as props, the rest goes through the
 * `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <LinearRegressionSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.linearregression
 */
export declare function LinearRegressionSeries(_props: LinearRegressionSeriesProps): any;
export declare namespace LinearRegressionSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default LinearRegression;
