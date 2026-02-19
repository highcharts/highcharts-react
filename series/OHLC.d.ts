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
import type { SeriesOHLCOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * OHLC series
 */
declare const OHLC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OHLCSeries;
    type: string;
};
export interface OHLCSeriesProps {
    type?: "ohlc";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesOHLCOptions, "type">;
}
export declare function OHLCSeries(_props: OHLCSeriesProps): any;
export declare namespace OHLCSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default OHLC;
