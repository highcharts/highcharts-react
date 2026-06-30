/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesOhlcOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * OHLC series
 */
declare const OHLC: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof OHLCSeries;
    type: string;
};
type SeriesOhlcConfig = Omit<SeriesOhlcOptions, "type">;
export interface OHLCSeriesProps {
    id?: SeriesOhlcConfig["id"];
    index?: SeriesOhlcConfig["index"];
    name?: SeriesOhlcConfig["name"];
    className?: SeriesOhlcConfig["className"];
    color?: SeriesOhlcConfig["color"];
    events?: SeriesOhlcConfig["events"];
    data?: SeriesOhlcConfig["data"];
    options?: SeriesOhlcConfig;
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
