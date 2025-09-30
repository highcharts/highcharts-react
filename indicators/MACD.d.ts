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
import type { SeriesMACDOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * MACD series
 */
declare const MACD: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MACDSeries;
    type: string;
};
interface MACDSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMACDOptions>;
    children?: React.ReactNode;
}
export declare function MACDSeries(_props: MACDSeriesProps): any;
export declare namespace MACDSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default MACD;
