/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React from "react";
import type { SeriesGeoheatmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A `geoheatmap` series is a variety of heatmap series, composed into the map
 * projection, where the units are expressed in the latitude and longitude, and
 * individual values contained in a matrix are represented as colors.
 *
 * A ready-made chart with `chart.type` set to `geoheatmap`. Declare the data
 * with `<GeoHeatmap.Series>`, or use `GeoHeatmapSeries` inside a plain
 * `<MapsChart>` to combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <GeoHeatmap>
 *   <GeoHeatmap.Series data={[1, 2, 3]} />
 * </GeoHeatmap>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.geoheatmap
 */
declare function GeoHeatmap(props: ICommonAttributes): React.JSX.Element;
declare namespace GeoHeatmap {
    export { GeoHeatmapSeries as Series };
    export var type: string;
}
type SeriesGeoheatmapConfig = Omit<SeriesGeoheatmapOptions, "type">;
/** Props for the `<GeoHeatmapSeries />` component. */
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
/**
 * A `geoheatmap` series is a variety of heatmap series, composed into the map
 * projection, where the units are expressed in the latitude and longitude, and
 * individual values contained in a matrix are represented as colors.
 *
 * Renders the `geoheatmap` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <GeoHeatmapSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.geoheatmap
 */
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
