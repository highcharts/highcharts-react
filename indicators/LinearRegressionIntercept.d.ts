/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesLinearregressioninterceptOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * LinearRegressionIntercept series
 */
declare const LinearRegressionIntercept: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearRegressionInterceptSeries;
    type: string;
};
type SeriesLinearregressioninterceptConfig = Omit<SeriesLinearregressioninterceptOptions, "type">;
export interface LinearRegressionInterceptSeriesProps {
    id?: SeriesLinearregressioninterceptConfig["id"];
    index?: SeriesLinearregressioninterceptConfig["index"];
    name?: SeriesLinearregressioninterceptConfig["name"];
    className?: SeriesLinearregressioninterceptConfig["className"];
    color?: SeriesLinearregressioninterceptConfig["color"];
    events?: SeriesLinearregressioninterceptConfig["events"];
    options?: SeriesLinearregressioninterceptConfig;
}
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
