/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-28
 *
 */
import React from "react";
import type { SeriesMacdOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Macd series
 */
declare const Macd: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MacdSeries;
    type: string;
};
interface MacdSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMacdOptions>;
    children?: React.ReactNode;
}
export declare function MacdSeries(_props: MacdSeriesProps): any;
export declare namespace MacdSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Macd;
