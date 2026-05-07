/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
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
type SeriesHistogramConfig = Omit<SeriesHistogramOptions, "type">;
export interface HistogramSeriesProps {
    id?: SeriesHistogramConfig["id"];
    index?: SeriesHistogramConfig["index"];
    name?: SeriesHistogramConfig["name"];
    className?: SeriesHistogramConfig["className"];
    color?: SeriesHistogramConfig["color"];
    events?: SeriesHistogramConfig["events"];
    options?: SeriesHistogramConfig;
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
