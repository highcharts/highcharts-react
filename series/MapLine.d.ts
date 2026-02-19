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
import type { SeriesMapLineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MapLine series
 */
declare const MapLine: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapLineSeries;
    type: string;
};
export interface MapLineSeriesProps {
    type?: "mapline";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesMapLineOptions, "type">;
}
export declare function MapLineSeries(_props: MapLineSeriesProps): any;
export declare namespace MapLineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MapLine;
