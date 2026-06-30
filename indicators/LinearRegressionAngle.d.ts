/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesLinearregressionangleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * LinearRegressionAngle series
 */
declare const LinearRegressionAngle: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearRegressionAngleSeries;
    type: string;
};
type SeriesLinearregressionangleConfig = Omit<SeriesLinearregressionangleOptions, "type">;
export interface LinearRegressionAngleSeriesProps {
    id?: SeriesLinearregressionangleConfig["id"];
    index?: SeriesLinearregressionangleConfig["index"];
    name?: SeriesLinearregressionangleConfig["name"];
    className?: SeriesLinearregressionangleConfig["className"];
    color?: SeriesLinearregressionangleConfig["color"];
    events?: SeriesLinearregressionangleConfig["events"];
    options?: SeriesLinearregressionangleConfig;
}
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
