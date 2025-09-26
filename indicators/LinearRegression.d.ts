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
import type { SeriesLinearRegressionOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * LinearRegression series
 */
declare const LinearRegression: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearRegressionSeries;
    type: string;
};
interface LinearRegressionSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearRegressionOptions>;
    children?: React.ReactNode;
}
export declare function LinearRegressionSeries(_props: LinearRegressionSeriesProps): any;
export declare namespace LinearRegressionSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default LinearRegression;
