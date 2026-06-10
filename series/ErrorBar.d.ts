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
import type { SeriesErrorbarOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * ErrorBar series
 */
declare const ErrorBar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ErrorBarSeries;
    type: string;
};
type SeriesErrorbarConfig = Omit<SeriesErrorbarOptions, "type">;
export interface ErrorBarSeriesProps {
    id?: SeriesErrorbarConfig["id"];
    index?: SeriesErrorbarConfig["index"];
    name?: SeriesErrorbarConfig["name"];
    className?: SeriesErrorbarConfig["className"];
    color?: SeriesErrorbarConfig["color"];
    events?: SeriesErrorbarConfig["events"];
    data?: SeriesErrorbarConfig["data"];
    options?: SeriesErrorbarConfig;
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
