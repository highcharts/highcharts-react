/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesLinearRegressionAngleOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * LinearRegressionAngle series
 */
declare const LinearRegressionAngle: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearRegressionAngleSeries;
    type: string;
};
interface LinearRegressionAngleSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearRegressionAngleOptions>;
    children?: React.ReactNode;
}
export declare function LinearRegressionAngleSeries(_props: LinearRegressionAngleSeriesProps): any;
export declare namespace LinearRegressionAngleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default LinearRegressionAngle;
