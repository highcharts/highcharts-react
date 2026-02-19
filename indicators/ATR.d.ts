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
import type { SeriesATROptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * ATR series
 */
declare const ATR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ATRSeries;
    type: string;
};
export interface ATRSeriesProps {
    type?: "atr";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesATROptions, "type">;
}
export declare function ATRSeries(_props: ATRSeriesProps): any;
export declare namespace ATRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ATR;
