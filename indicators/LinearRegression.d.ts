/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesLinearRegressionOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * LinearRegression series
 */
declare const LinearRegression: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearRegressionSeries;
    type: string;
};
export interface LinearRegressionSeriesProps {
    type?: "linearregression";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesLinearRegressionOptions, "type">;
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
