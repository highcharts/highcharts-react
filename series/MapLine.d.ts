/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesMaplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MapLine series
 */
declare const MapLine: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapLineSeries;
    type: string;
};
type SeriesMaplineConfig = Omit<SeriesMaplineOptions, "type">;
export interface MapLineSeriesProps {
    id?: SeriesMaplineConfig["id"];
    index?: SeriesMaplineConfig["index"];
    name?: SeriesMaplineConfig["name"];
    className?: SeriesMaplineConfig["className"];
    color?: SeriesMaplineConfig["color"];
    events?: SeriesMaplineConfig["events"];
    data?: SeriesMaplineConfig["data"];
    options?: SeriesMaplineConfig;
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
