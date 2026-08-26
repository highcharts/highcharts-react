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
import type { SeriesTiledwebmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A tiledwebmap series allows user to display dynamically joined individual
 * images (tiles) and join them together to create a map.
 *
 * A ready-made chart with `chart.type` set to `tiledwebmap`. Declare the data
 * with `<TiledWebMap.Series>`, or use `TiledWebMapSeries` inside a plain
 * `<MapsChart>` to combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <TiledWebMap>
 *   <TiledWebMap.Series />
 * </TiledWebMap>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.tiledwebmap
 */
declare function TiledWebMap(props: ICommonAttributes): React.JSX.Element;
declare namespace TiledWebMap {
    export { TiledWebMapSeries as Series };
    export var type: string;
}
type SeriesTiledwebmapConfig = Omit<SeriesTiledwebmapOptions, "type">;
/** Props for the `<TiledWebMapSeries />` component. */
export interface TiledWebMapSeriesProps {
    id?: SeriesTiledwebmapConfig["id"];
    index?: SeriesTiledwebmapConfig["index"];
    name?: SeriesTiledwebmapConfig["name"];
    className?: SeriesTiledwebmapConfig["className"];
    color?: SeriesTiledwebmapConfig["color"];
    events?: SeriesTiledwebmapConfig["events"];
    options?: SeriesTiledwebmapConfig;
}
/**
 * A tiledwebmap series allows user to display dynamically joined individual
 * images (tiles) and join them together to create a map.
 *
 * Renders the `tiledwebmap` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <TiledWebMapSeries />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.tiledwebmap
 */
export declare function TiledWebMapSeries(_props: TiledWebMapSeriesProps): any;
export declare namespace TiledWebMapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default TiledWebMap;
