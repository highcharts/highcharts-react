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
import type { SeriesMapPointOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MapPoint series
 */
declare const MapPoint: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapPointSeries;
    type: string;
};
export interface MapPointSeriesProps {
    type?: "mappoint";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesMapPointOptions, "type">;
}
export declare function MapPointSeries(_props: MapPointSeriesProps): any;
export declare namespace MapPointSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MapPoint;
