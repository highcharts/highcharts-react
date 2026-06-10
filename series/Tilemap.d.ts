/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesTilemapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Tilemap series
 */
declare const Tilemap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TilemapSeries;
    type: string;
};
type SeriesTilemapConfig = Omit<SeriesTilemapOptions, "type">;
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
