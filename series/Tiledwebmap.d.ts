/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
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
    Series: typeof TiledwebmapSeries;
    type: string;
};
interface TiledwebmapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTiledwebmapOptions>;
    children?: React.ReactNode;
}
export declare function TiledwebmapSeries(_props: TiledwebmapSeriesProps): any;
export declare namespace TiledwebmapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Tiledwebmap;
