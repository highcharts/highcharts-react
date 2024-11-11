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
import type { SeriesOhlcOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ohlc series
 */
declare const Ohlc: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OhlcSeries;
    type: string;
};
interface OhlcSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesOhlcOptions>;
}
export declare function OhlcSeries(_props: OhlcSeriesProps): any;
export declare namespace OhlcSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Ohlc;