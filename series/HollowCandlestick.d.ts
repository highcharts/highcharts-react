/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesHollowcandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * HollowCandlestick series
 */
declare const HollowCandlestick: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HollowCandlestickSeries;
    type: string;
};
type SeriesHollowcandlestickConfig = Omit<SeriesHollowcandlestickOptions, "type">;
export interface HollowCandlestickSeriesProps {
    id?: SeriesHollowcandlestickConfig["id"];
    index?: SeriesHollowcandlestickConfig["index"];
    name?: SeriesHollowcandlestickConfig["name"];
    className?: SeriesHollowcandlestickConfig["className"];
    color?: SeriesHollowcandlestickConfig["color"];
    events?: SeriesHollowcandlestickConfig["events"];
    data?: SeriesHollowcandlestickConfig["data"];
    options?: SeriesHollowcandlestickConfig;
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
