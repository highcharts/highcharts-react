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
import type { SeriesLinearRegressionInterceptOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * LinearRegressionIntercept series
 */
declare const LinearRegressionIntercept: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearRegressionInterceptSeries;
    type: string;
};
export interface LinearRegressionInterceptSeriesProps {
    type?: "linearregressionintercept";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesLinearRegressionInterceptOptions, "type">;
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
