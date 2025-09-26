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
import type { SeriesLinearRegressionInterceptOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * LinearRegressionIntercept series
 */
declare const LinearRegressionIntercept: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearRegressionInterceptSeries;
    type: string;
};
interface LinearRegressionInterceptSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearRegressionInterceptOptions>;
    children?: React.ReactNode;
}
export declare function LinearRegressionInterceptSeries(_props: LinearRegressionInterceptSeriesProps): any;
export declare namespace LinearRegressionInterceptSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default LinearRegressionIntercept;
