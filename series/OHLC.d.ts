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
import type { SeriesOHLCOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * OHLC series
 */
declare const OHLC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OHLCSeries;
    type: string;
};
interface OHLCSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesOHLCOptions>;
    children?: React.ReactNode;
}
export declare function OHLCSeries(_props: OHLCSeriesProps): any;
export declare namespace OHLCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default OHLC;
