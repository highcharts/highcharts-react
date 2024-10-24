/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React from "react";
import type { SeriesMapDataOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * MapData series
 */
declare const MapData: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapDataSeries;
    type: string;
};
interface MapDataSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMapDataOptions>;
}
export declare function MapDataSeries(_props: MapDataSeriesProps): any;
export declare namespace MapDataSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default MapData;
