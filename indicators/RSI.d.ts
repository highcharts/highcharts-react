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
import type { SeriesRSIOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * RSI series
 */
declare const RSI: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof RSISeries;
    type: string;
};
export interface RSISeriesProps {
    type?: "rsi";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesRSIOptions, "type">;
}
export declare function RSISeries(_props: RSISeriesProps): any;
export declare namespace RSISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default RSI;
