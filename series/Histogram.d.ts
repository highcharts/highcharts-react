/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
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
}
export declare function HistogramSeries(_props: HistogramSeriesProps): any;
export declare namespace HistogramSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Histogram;
