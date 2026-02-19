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
import type { SeriesHollowCandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * HollowCandlestick series
 */
declare const HollowCandlestick: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HollowCandlestickSeries;
    type: string;
};
export interface HollowCandlestickSeriesProps {
    type?: "hollowcandlestick";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesHollowCandlestickOptions, "type">;
}
export declare function HollowCandlestickSeries(_props: HollowCandlestickSeriesProps): any;
export declare namespace HollowCandlestickSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default HollowCandlestick;
