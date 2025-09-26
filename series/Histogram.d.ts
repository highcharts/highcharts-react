/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesHistogramOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Histogram series
 */
declare const Histogram: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HistogramSeries;
    type: string;
};
interface HistogramSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesHistogramOptions>;
    children?: React.ReactNode;
}
export declare function HistogramSeries(_props: HistogramSeriesProps): any;
export declare namespace HistogramSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Histogram;
