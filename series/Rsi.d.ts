/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React from "react";
import type { SeriesRsiOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Rsi series
 */
declare const Rsi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof RsiSeries;
    type: string;
};
interface RsiSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesRsiOptions>;
    children?: React.ReactNode;
}
export declare function RsiSeries(_props: RsiSeriesProps): any;
export declare namespace RsiSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Rsi;
