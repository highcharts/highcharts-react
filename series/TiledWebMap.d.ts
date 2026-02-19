/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesTiledWebMapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * TiledWebMap series
 */
declare const TiledWebMap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TiledWebMapSeries;
    type: string;
};
export interface TiledWebMapSeriesProps {
    type?: "tiledwebmap";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesTiledWebMapOptions, "type">;
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
