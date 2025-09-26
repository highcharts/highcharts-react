/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesHeikinAshiOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * HeikinAshi series
 */
declare const HeikinAshi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HeikinAshiSeries;
    type: string;
};
interface HeikinAshiSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHeikinAshiOptions>;
    children?: React.ReactNode;
}
export declare function HeikinAshiSeries(_props: HeikinAshiSeriesProps): any;
export declare namespace HeikinAshiSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default HeikinAshi;
