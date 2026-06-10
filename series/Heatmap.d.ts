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
import type { SeriesHeatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Heatmap series
 */
declare const Heatmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HeatmapSeries;
    type: string;
};
type SeriesHeatmapConfig = Omit<SeriesHeatmapOptions, "type">;
export interface HeatmapSeriesProps {
    id?: SeriesHeatmapConfig["id"];
    index?: SeriesHeatmapConfig["index"];
    name?: SeriesHeatmapConfig["name"];
    className?: SeriesHeatmapConfig["className"];
    color?: SeriesHeatmapConfig["color"];
    events?: SeriesHeatmapConfig["events"];
    data?: SeriesHeatmapConfig["data"];
    options?: SeriesHeatmapConfig;
}
export declare function HeatmapSeries(_props: HeatmapSeriesProps): any;
export declare namespace HeatmapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Heatmap;
