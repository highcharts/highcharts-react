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
import type { SeriesMapdataOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A ready-made chart with `chart.type` set to `mapdata`. Declare the data with
 * `<MapData.Series>`, or use `MapDataSeries` inside a plain `<MapsChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapData>
 *   <MapData.Series />
 * </MapData>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.mapdata
 */
declare function MapData(props: ICommonAttributes): React.JSX.Element;
declare namespace MapData {
    export { MapDataSeries as Series };
    export var type: string;
}
type SeriesMapdataConfig = Omit<SeriesMapdataOptions, "type">;
/** Props for the `<MapDataSeries />` component. */
export interface MapDataSeriesProps {
    id?: SeriesMapdataConfig["id"];
    index?: SeriesMapdataConfig["index"];
    name?: SeriesMapdataConfig["name"];
    className?: SeriesMapdataConfig["className"];
    color?: SeriesMapdataConfig["color"];
    events?: SeriesMapdataConfig["events"];
    options?: SeriesMapdataConfig;
}
/**
 * Renders the `mapdata` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapDataSeries />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.mapdata
 */
export declare function MapDataSeries(_props: MapDataSeriesProps): any;
export declare namespace MapDataSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MapData;
