/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesBoxplotOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * BoxPlot series
 */
declare const BoxPlot: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BoxPlotSeries;
    type: string;
};
type SeriesBoxplotConfig = Omit<SeriesBoxplotOptions, "type">;
export interface BoxPlotSeriesProps {
    id?: SeriesBoxplotConfig["id"];
    index?: SeriesBoxplotConfig["index"];
    name?: SeriesBoxplotConfig["name"];
    className?: SeriesBoxplotConfig["className"];
    color?: SeriesBoxplotConfig["color"];
    events?: SeriesBoxplotConfig["events"];
    data?: SeriesBoxplotConfig["data"];
    options?: SeriesBoxplotConfig;
}
export declare function BoxPlotSeries(_props: BoxPlotSeriesProps): any;
export declare namespace BoxPlotSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default BoxPlot;
