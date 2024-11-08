/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
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
}
export declare function TilemapSeries(_props: TilemapSeriesProps): any;
export declare namespace TilemapSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Tilemap;
