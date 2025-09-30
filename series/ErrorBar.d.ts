/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesErrorBarOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * ErrorBar series
 */
declare const ErrorBar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ErrorBarSeries;
    type: string;
};
interface ErrorBarSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesErrorBarOptions>;
    children?: React.ReactNode;
}
export declare function ErrorBarSeries(_props: ErrorBarSeriesProps): any;
export declare namespace ErrorBarSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default ErrorBar;
