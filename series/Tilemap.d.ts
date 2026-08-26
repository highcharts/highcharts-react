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
import type { SeriesTilemapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A tilemap series is a type of heatmap where the tile shapes are
 * configurable.
 *
 * A ready-made chart with `chart.type` set to `tilemap`. Declare the data with
 * `<Tilemap.Series>`, or use `TilemapSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Tilemap>
 *   <Tilemap.Series data={[1, 2, 3]} />
 * </Tilemap>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.tilemap
 */
declare function Tilemap(props: ICommonAttributes): React.JSX.Element;
declare namespace Tilemap {
    export { TilemapSeries as Series };
    export var type: string;
}
type SeriesTilemapConfig = Omit<SeriesTilemapOptions, "type">;
/** Props for the `<TilemapSeries />` component. */
export interface TilemapSeriesProps {
    id?: SeriesTilemapConfig["id"];
    index?: SeriesTilemapConfig["index"];
    name?: SeriesTilemapConfig["name"];
    className?: SeriesTilemapConfig["className"];
    color?: SeriesTilemapConfig["color"];
    events?: SeriesTilemapConfig["events"];
    data?: SeriesTilemapConfig["data"];
    options?: SeriesTilemapConfig;
}
/**
 * A tilemap series is a type of heatmap where the tile shapes are
 * configurable.
 *
 * Renders the `tilemap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Chart>
 *   <TilemapSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.tilemap
 */
export declare function TilemapSeries(_props: TilemapSeriesProps): any;
export declare namespace TilemapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Tilemap;
