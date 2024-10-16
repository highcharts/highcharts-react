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
import type { SeriesTiledwebmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Tiledwebmap series
 */
declare const Tiledwebmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: TiledwebmapSeriesProps): React.JSX.Element;
    type: string;
};
interface TiledwebmapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTiledwebmapOptions>;
}
export default Tiledwebmap;
