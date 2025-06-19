/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React from "react";
import type { SeriesBarOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Bar series
 */
declare const Bar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BarSeries;
    type: string;
};
interface BarSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBarOptions>;
    children?: React.ReactNode;
}
export declare function BarSeries(_props: BarSeriesProps): any;
export declare namespace BarSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Bar;
