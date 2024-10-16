/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
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
    Series(_props: TilemapSeriesProps): React.JSX.Element;
    type: string;
};
interface TilemapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTilemapOptions>;
}
export default Tilemap;
