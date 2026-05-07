/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesXrangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * XRange series
 */
declare const XRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof XRangeSeries;
    type: string;
};
type SeriesXrangeConfig = Omit<SeriesXrangeOptions, "type">;
export interface XRangeSeriesProps {
    id?: SeriesXrangeConfig["id"];
    index?: SeriesXrangeConfig["index"];
    name?: SeriesXrangeConfig["name"];
    className?: SeriesXrangeConfig["className"];
    color?: SeriesXrangeConfig["color"];
    events?: SeriesXrangeConfig["events"];
    data?: SeriesXrangeConfig["data"];
    options?: SeriesXrangeConfig;
}
export declare function XRangeSeries(_props: XRangeSeriesProps): any;
export declare namespace XRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default XRange;
