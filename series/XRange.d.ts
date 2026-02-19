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
import type { SeriesXRangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * XRange series
 */
declare const XRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof XRangeSeries;
    type: string;
};
export interface XRangeSeriesProps {
    type?: "xrange";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesXRangeOptions, "type">;
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
