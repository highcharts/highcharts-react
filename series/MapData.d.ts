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
import type { SeriesMapDataOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MapData series
 */
declare const MapData: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapDataSeries;
    type: string;
};
export interface MapDataSeriesProps {
    type?: "mapdata";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesMapDataOptions, "type">;
}
export declare function MapDataSeries(_props: MapDataSeriesProps): any;
export declare namespace MapDataSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MapData;
