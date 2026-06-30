/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesGeoheatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * GeoHeatmap series
 */
declare const GeoHeatmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof GeoHeatmapSeries;
    type: string;
};
type SeriesGeoheatmapConfig = Omit<SeriesGeoheatmapOptions, "type">;
export interface GeoHeatmapSeriesProps {
    id?: SeriesGeoheatmapConfig["id"];
    index?: SeriesGeoheatmapConfig["index"];
    name?: SeriesGeoheatmapConfig["name"];
    className?: SeriesGeoheatmapConfig["className"];
    color?: SeriesGeoheatmapConfig["color"];
    events?: SeriesGeoheatmapConfig["events"];
    data?: SeriesGeoheatmapConfig["data"];
    options?: SeriesGeoheatmapConfig;
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
