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
import type { SeriesCandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Candlestick series
 */
declare const Candlestick: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CandlestickSeries;
    type: string;
};
export interface CandlestickSeriesProps {
    type?: "candlestick";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesCandlestickOptions, "type">;
}
export declare function CandlestickSeries(_props: CandlestickSeriesProps): any;
export declare namespace CandlestickSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Candlestick;
