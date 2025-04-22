/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-22
 *
 */
import React from "react";
import type { SeriesWilliamsrOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Williamsr series
 */
declare const Williamsr: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof WilliamsrSeries;
    type: string;
};
interface WilliamsrSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesWilliamsrOptions>;
    children?: React.ReactNode;
}
export declare function WilliamsrSeries(_props: WilliamsrSeriesProps): any;
export declare namespace WilliamsrSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Williamsr;
