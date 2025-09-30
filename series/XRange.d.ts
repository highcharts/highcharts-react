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
import type { SeriesXRangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * XRange series
 */
declare const XRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof XRangeSeries;
    type: string;
};
interface XRangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesXRangeOptions>;
    children?: React.ReactNode;
}
export declare function XRangeSeries(_props: XRangeSeriesProps): any;
export declare namespace XRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default XRange;
