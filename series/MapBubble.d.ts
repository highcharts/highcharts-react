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
import type { SeriesMapbubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A map bubble series is a bubble series laid out on top of a map series,
 * where each bubble is tied to a specific map area.
 *
 * A ready-made chart with `chart.type` set to `mapbubble`. Declare the data
 * with `<MapBubble.Series>`, or use `MapBubbleSeries` inside a plain
 * `<MapsChart>` to combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapBubble>
 *   <MapBubble.Series data={[1, 2, 3]} />
 * </MapBubble>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.mapbubble
 */
declare function MapBubble(props: ICommonAttributes): React.JSX.Element;
declare namespace MapBubble {
    export { MapBubbleSeries as Series };
    export var type: string;
}
type SeriesMapbubbleConfig = Omit<SeriesMapbubbleOptions, "type">;
/** Props for the `<MapBubbleSeries />` component. */
export interface MapBubbleSeriesProps {
    id?: SeriesMapbubbleConfig["id"];
    index?: SeriesMapbubbleConfig["index"];
    name?: SeriesMapbubbleConfig["name"];
    className?: SeriesMapbubbleConfig["className"];
    color?: SeriesMapbubbleConfig["color"];
    events?: SeriesMapbubbleConfig["events"];
    data?: SeriesMapbubbleConfig["data"];
    options?: SeriesMapbubbleConfig;
}
/**
 * A map bubble series is a bubble series laid out on top of a map series,
 * where each bubble is tied to a specific map area.
 *
 * Renders the `mapbubble` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <MapBubbleSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.mapbubble
 */
export declare function MapBubbleSeries(_props: MapBubbleSeriesProps): any;
export declare namespace MapBubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MapBubble;
