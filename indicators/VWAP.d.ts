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
import type { SeriesVWAPOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * VWAP series
 */
declare const VWAP: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VWAPSeries;
    type: string;
};
interface VWAPSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVWAPOptions>;
    children?: React.ReactNode;
}
export declare function VWAPSeries(_props: VWAPSeriesProps): any;
export declare namespace VWAPSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default VWAP;
