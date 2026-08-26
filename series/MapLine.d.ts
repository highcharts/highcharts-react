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
import type { SeriesMaplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A mapline series is a special case of the map series where the value colors
 * are applied to the strokes rather than the fills. It can also be used for
 * freeform drawing, like dividers, in the map.
 *
 * A ready-made chart with `chart.type` set to `mapline`. Declare the data with
 * `<MapLine.Series>`, or use `MapLineSeries` inside a plain `<MapsChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapLine>
 *   <MapLine.Series data={[1, 2, 3]} />
 * </MapLine>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.mapline
 */
declare function MapLine(props: ICommonAttributes): React.JSX.Element;
declare namespace MapLine {
    export { MapLineSeries as Series };
    export var type: string;
}
type SeriesMaplineConfig = Omit<SeriesMaplineOptions, "type">;
/** Props for the `<MapLineSeries />` component. */
export interface MapLineSeriesProps {
    id?: SeriesMaplineConfig["id"];
    index?: SeriesMaplineConfig["index"];
    name?: SeriesMaplineConfig["name"];
    className?: SeriesMaplineConfig["className"];
    color?: SeriesMaplineConfig["color"];
    events?: SeriesMaplineConfig["events"];
    data?: SeriesMaplineConfig["data"];
    options?: SeriesMaplineConfig;
}
/**
 * A mapline series is a special case of the map series where the value colors
 * are applied to the strokes rather than the fills. It can also be used for
 * freeform drawing, like dividers, in the map.
 *
 * Renders the `mapline` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapLineSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.mapline
 */
export declare function MapLineSeries(_props: MapLineSeriesProps): any;
export declare namespace MapLineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MapLine;
