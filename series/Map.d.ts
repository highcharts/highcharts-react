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
import type { SeriesMapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * The map series is used for basic choropleth maps, where each map area has a
 * color based on its value.
 *
 * A ready-made chart with `chart.type` set to `map`. Declare the data with
 * `<Map.Series>`, or use `MapSeries` inside a plain `<MapsChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <Map>
 *   <Map.Series data={[1, 2, 3]} />
 * </Map>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.map
 */
declare function Map(props: ICommonAttributes): React.JSX.Element;
declare namespace Map {
    export { MapSeries as Series };
    export var type: string;
}
type SeriesMapConfig = Omit<SeriesMapOptions, "type">;
/** Props for the `<MapSeries />` component. */
export interface MapSeriesProps {
    id?: SeriesMapConfig["id"];
    index?: SeriesMapConfig["index"];
    name?: SeriesMapConfig["name"];
    className?: SeriesMapConfig["className"];
    color?: SeriesMapConfig["color"];
    events?: SeriesMapConfig["events"];
    data?: SeriesMapConfig["data"];
    options?: SeriesMapConfig;
}
/**
 * The map series is used for basic choropleth maps, where each map area has a
 * color based on its value.
 *
 * Renders the `map` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.map
 */
export declare function MapSeries(_props: MapSeriesProps): any;
export declare namespace MapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Map;
