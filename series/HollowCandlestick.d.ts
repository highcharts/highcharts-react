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
import type { SeriesHollowCandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * HollowCandlestick series
 */
declare const HollowCandlestick: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HollowCandlestickSeries;
    type: string;
};
interface HollowCandlestickSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHollowCandlestickOptions>;
    children?: React.ReactNode;
}
export declare function HollowCandlestickSeries(_props: HollowCandlestickSeriesProps): any;
export declare namespace HollowCandlestickSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default HollowCandlestick;
