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
import type { SeriesWilliamsROptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * WilliamsR series
 */
declare const WilliamsR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WilliamsRSeries;
    type: string;
};
interface WilliamsRSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWilliamsROptions>;
    children?: React.ReactNode;
}
export declare function WilliamsRSeries(_props: WilliamsRSeriesProps): any;
export declare namespace WilliamsRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default WilliamsR;
