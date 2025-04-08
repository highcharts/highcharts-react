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
import type { SeriesHollowcandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Hollowcandlestick series
 */
declare const Hollowcandlestick: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HollowcandlestickSeries;
    type: string;
};
interface HollowcandlestickSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHollowcandlestickOptions>;
    children?: React.ReactNode;
}
export declare function HollowcandlestickSeries(_props: HollowcandlestickSeriesProps): any;
export declare namespace HollowcandlestickSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Hollowcandlestick;
