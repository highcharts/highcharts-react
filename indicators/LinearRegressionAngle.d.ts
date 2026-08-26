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
import type { SeriesLinearregressionangleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Linear regression angle indicator. This series requires `linkedTo` option to
 * be set.
 *
 * A ready-made chart with `chart.type` set to `linearregressionangle`. Declare
 * the data with `<LinearRegressionAngle.Series>`, or use
 * `LinearRegressionAngleSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <LinearRegressionAngle>
 *   <LinearRegressionAngle.Series options={{ linkedTo: 'prices' }} />
 * </LinearRegressionAngle>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.linearregressionangle
 */
declare function LinearRegressionAngle(props: ICommonAttributes): React.JSX.Element;
declare namespace LinearRegressionAngle {
    export { LinearRegressionAngleSeries as Series };
    export var type: string;
}
type SeriesLinearregressionangleConfig = Omit<SeriesLinearregressionangleOptions, "type">;
/** Props for the `<LinearRegressionAngleSeries />` component. */
export interface LinearRegressionAngleSeriesProps {
    id?: SeriesLinearregressionangleConfig["id"];
    index?: SeriesLinearregressionangleConfig["index"];
    name?: SeriesLinearregressionangleConfig["name"];
    className?: SeriesLinearregressionangleConfig["className"];
    color?: SeriesLinearregressionangleConfig["color"];
    events?: SeriesLinearregressionangleConfig["events"];
    options?: SeriesLinearregressionangleConfig;
}
/**
 * Linear regression angle indicator. This series requires `linkedTo` option to
 * be set.
 *
 * Renders the `linearregressionangle` series type inside a chart component.
 * The most common options are available as props, the rest goes through the
 * `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <LinearRegressionAngleSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.linearregressionangle
 */
export declare function LinearRegressionAngleSeries(_props: LinearRegressionAngleSeriesProps): any;
export declare namespace LinearRegressionAngleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default LinearRegressionAngle;
