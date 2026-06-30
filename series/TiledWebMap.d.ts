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
import type { SeriesTiledwebmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * TiledWebMap series
 */
declare const TiledWebMap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TiledWebMapSeries;
    type: string;
};
type SeriesTiledwebmapConfig = Omit<SeriesTiledwebmapOptions, "type">;
export interface TiledWebMapSeriesProps {
    id?: SeriesTiledwebmapConfig["id"];
    index?: SeriesTiledwebmapConfig["index"];
    name?: SeriesTiledwebmapConfig["name"];
    className?: SeriesTiledwebmapConfig["className"];
    color?: SeriesTiledwebmapConfig["color"];
    events?: SeriesTiledwebmapConfig["events"];
    options?: SeriesTiledwebmapConfig;
}
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
