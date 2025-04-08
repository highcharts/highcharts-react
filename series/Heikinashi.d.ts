/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */
import React from "react";
import type { SeriesHeikinashiOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Heikinashi series
 */
declare const Heikinashi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HeikinashiSeries;
    type: string;
};
interface HeikinashiSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHeikinashiOptions>;
    children?: React.ReactNode;
}
export declare function HeikinashiSeries(_props: HeikinashiSeriesProps): any;
export declare namespace HeikinashiSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Heikinashi;
