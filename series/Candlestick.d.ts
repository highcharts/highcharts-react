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
type SeriesCandlestickConfig = Omit<SeriesCandlestickOptions, "type">;
export interface CandlestickSeriesProps {
    id?: SeriesCandlestickConfig["id"];
    index?: SeriesCandlestickConfig["index"];
    name?: SeriesCandlestickConfig["name"];
    className?: SeriesCandlestickConfig["className"];
    color?: SeriesCandlestickConfig["color"];
    events?: SeriesCandlestickConfig["events"];
    data?: SeriesCandlestickConfig["data"];
    options?: SeriesCandlestickConfig;
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
