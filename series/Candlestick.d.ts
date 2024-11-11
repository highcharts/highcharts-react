/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React from "react";
import type { SeriesCandlestickOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Candlestick series
 */
declare const Candlestick: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof CandlestickSeries;
    type: string;
};
interface CandlestickSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesCandlestickOptions>;
}
export declare function CandlestickSeries(_props: CandlestickSeriesProps): any;
export declare namespace CandlestickSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Candlestick;