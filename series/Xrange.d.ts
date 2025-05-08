/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React from "react";
import type { SeriesXrangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Xrange series
 */
declare const Xrange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof XrangeSeries;
    type: string;
};
interface XrangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesXrangeOptions>;
    children?: React.ReactNode;
}
export declare function XrangeSeries(_props: XrangeSeriesProps): any;
export declare namespace XrangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Xrange;
