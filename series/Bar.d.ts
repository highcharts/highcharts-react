/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
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
}
export declare function BarSeries(_props: BarSeriesProps): any;
export declare namespace BarSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Bar;