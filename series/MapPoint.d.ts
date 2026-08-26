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
import type { SeriesMappointOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A mappoint series is a special form of scatter series where the points can
 * be laid out in map coordinates on top of a map.
 *
 * A ready-made chart with `chart.type` set to `mappoint`. Declare the data
 * with `<MapPoint.Series>`, or use `MapPointSeries` inside a plain
 * `<MapsChart>` to combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapPoint>
 *   <MapPoint.Series data={[1, 2, 3]} />
 * </MapPoint>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.mappoint
 */
declare function MapPoint(props: ICommonAttributes): React.JSX.Element;
declare namespace MapPoint {
    export { MapPointSeries as Series };
    export var type: string;
}
type SeriesMappointConfig = Omit<SeriesMappointOptions, "type">;
/** Props for the `<MapPointSeries />` component. */
export interface MapPointSeriesProps {
    id?: SeriesMappointConfig["id"];
    index?: SeriesMappointConfig["index"];
    name?: SeriesMappointConfig["name"];
    className?: SeriesMappointConfig["className"];
    color?: SeriesMappointConfig["color"];
    events?: SeriesMappointConfig["events"];
    data?: SeriesMappointConfig["data"];
    options?: SeriesMappointConfig;
}
/**
 * A mappoint series is a special form of scatter series where the points can
 * be laid out in map coordinates on top of a map.
 *
 * Renders the `mappoint` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapPointSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.mappoint
 */
export declare function MapPointSeries(_props: MapPointSeriesProps): any;
export declare namespace MapPointSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MapPoint;
