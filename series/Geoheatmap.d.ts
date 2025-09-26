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
import type { SeriesGeoHeatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * GeoHeatmap series
 */
declare const GeoHeatmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GeoHeatmapSeries;
    type: string;
};
interface GeoHeatmapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesGeoHeatmapOptions>;
    children?: React.ReactNode;
}
export declare function GeoHeatmapSeries(_props: GeoHeatmapSeriesProps): any;
export declare namespace GeoHeatmapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default GeoHeatmap;
