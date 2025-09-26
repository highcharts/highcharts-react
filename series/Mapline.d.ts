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
import type { SeriesMapLineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * MapLine series
 */
declare const MapLine: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapLineSeries;
    type: string;
};
interface MapLineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMapLineOptions>;
    children?: React.ReactNode;
}
export declare function MapLineSeries(_props: MapLineSeriesProps): any;
export declare namespace MapLineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default MapLine;
