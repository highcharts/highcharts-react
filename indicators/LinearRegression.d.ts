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
import type { SeriesLinearregressionOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * LinearRegression series
 */
declare const LinearRegression: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearRegressionSeries;
    type: string;
};
type SeriesLinearregressionConfig = Omit<SeriesLinearregressionOptions, "type">;
export interface LinearRegressionSeriesProps {
    id?: SeriesLinearregressionConfig["id"];
    index?: SeriesLinearregressionConfig["index"];
    name?: SeriesLinearregressionConfig["name"];
    className?: SeriesLinearregressionConfig["className"];
    color?: SeriesLinearregressionConfig["color"];
    events?: SeriesLinearregressionConfig["events"];
    options?: SeriesLinearregressionConfig;
}
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
