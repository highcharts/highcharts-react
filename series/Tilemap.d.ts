/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React from "react";
import type { SeriesTilemapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Tilemap series
 */
declare const Tilemap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TilemapSeries;
    type: string;
};
interface TilemapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTilemapOptions>;
    children?: React.ReactNode;
}
export declare function TilemapSeries(_props: TilemapSeriesProps): any;
export declare namespace TilemapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Tilemap;
