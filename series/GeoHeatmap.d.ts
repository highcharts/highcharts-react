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
import type { SeriesGeoHeatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * GeoHeatmap series
 */
declare const GeoHeatmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GeoHeatmapSeries;
    type: string;
};
export interface GeoHeatmapSeriesProps {
    type?: "geoheatmap";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesGeoHeatmapOptions, "type">;
}
export declare function GeoHeatmapSeries(_props: GeoHeatmapSeriesProps): any;
export declare namespace GeoHeatmapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default GeoHeatmap;
