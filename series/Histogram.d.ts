/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesHistogramOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Histogram series
 */
declare const Histogram: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HistogramSeries;
    type: string;
};
export interface HistogramSeriesProps {
    type?: "histogram";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesHistogramOptions, "type">;
}
export declare function HistogramSeries(_props: HistogramSeriesProps): any;
export declare namespace HistogramSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Histogram;
