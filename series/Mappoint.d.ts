/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesMapPointOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * MapPoint series
 */
declare const MapPoint: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapPointSeries;
    type: string;
};
interface MapPointSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMapPointOptions>;
    children?: React.ReactNode;
}
export declare function MapPointSeries(_props: MapPointSeriesProps): any;
export declare namespace MapPointSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default MapPoint;
