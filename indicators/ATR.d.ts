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
import type { SeriesATROptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * ATR series
 */
declare const ATR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ATRSeries;
    type: string;
};
interface ATRSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesATROptions>;
    children?: React.ReactNode;
}
export declare function ATRSeries(_props: ATRSeriesProps): any;
export declare namespace ATRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default ATR;
