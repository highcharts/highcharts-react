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
export interface HeatmapSeriesProps {
    type?: "heatmap";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesHeatmapOptions, "type">;
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
