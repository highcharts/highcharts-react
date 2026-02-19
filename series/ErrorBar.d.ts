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
import type { SeriesErrorBarOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * ErrorBar series
 */
declare const ErrorBar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ErrorBarSeries;
    type: string;
};
export interface ErrorBarSeriesProps {
    type?: "errorbar";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesErrorBarOptions, "type">;
}
export declare function ErrorBarSeries(_props: ErrorBarSeriesProps): any;
export declare namespace ErrorBarSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ErrorBar;
