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
import type { SeriesLinearregressioninterceptOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Linear regression intercept indicator. This series requires `linkedTo`
 * option to be set.
 *
 * A ready-made chart with `chart.type` set to `linearregressionintercept`.
 * Declare the data with `<LinearRegressionIntercept.Series>`, or use
 * `LinearRegressionInterceptSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <LinearRegressionIntercept>
 *   <LinearRegressionIntercept.Series options={{ linkedTo: 'prices' }} />
 * </LinearRegressionIntercept>
 *
 * @see
 * https://api.highcharts.com/highstock/plotOptions.linearregressionintercept
 */
declare function LinearRegressionIntercept(props: ICommonAttributes): React.JSX.Element;
declare namespace LinearRegressionIntercept {
    export { LinearRegressionInterceptSeries as Series };
    export var type: string;
}
type SeriesLinearregressioninterceptConfig = Omit<SeriesLinearregressioninterceptOptions, "type">;
/** Props for the `<LinearRegressionInterceptSeries />` component. */
export interface LinearRegressionInterceptSeriesProps {
    id?: SeriesLinearregressioninterceptConfig["id"];
    index?: SeriesLinearregressioninterceptConfig["index"];
    name?: SeriesLinearregressioninterceptConfig["name"];
    className?: SeriesLinearregressioninterceptConfig["className"];
    color?: SeriesLinearregressioninterceptConfig["color"];
    events?: SeriesLinearregressioninterceptConfig["events"];
    options?: SeriesLinearregressioninterceptConfig;
}
/**
 * Linear regression intercept indicator. This series requires `linkedTo`
 * option to be set.
 *
 * Renders the `linearregressionintercept` series type inside a chart
 * component. The most common options are available as props, the rest goes
 * through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <LinearRegressionInterceptSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.linearregressionintercept
 */
export declare function LinearRegressionInterceptSeries(_props: LinearRegressionInterceptSeriesProps): any;
export declare namespace LinearRegressionInterceptSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default LinearRegressionIntercept;
