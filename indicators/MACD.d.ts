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
import type { SeriesMACDOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MACD series
 */
declare const MACD: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MACDSeries;
    type: string;
};
export interface MACDSeriesProps {
    type?: "macd";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesMACDOptions, "type">;
}
export declare function MACDSeries(_props: MACDSeriesProps): any;
export declare namespace MACDSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MACD;
