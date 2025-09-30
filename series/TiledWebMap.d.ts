/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesTiledWebMapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * TiledWebMap series
 */
declare const TiledWebMap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TiledWebMapSeries;
    type: string;
};
interface TiledWebMapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTiledWebMapOptions>;
    children?: React.ReactNode;
}
export declare function TiledWebMapSeries(_props: TiledWebMapSeriesProps): any;
export declare namespace TiledWebMapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default TiledWebMap;
