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
import type { SeriesMappointOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MapPoint series
 */
declare const MapPoint: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapPointSeries;
    type: string;
};
type SeriesMappointConfig = Omit<SeriesMappointOptions, "type">;
export interface MapPointSeriesProps {
    id?: SeriesMappointConfig["id"];
    index?: SeriesMappointConfig["index"];
    name?: SeriesMappointConfig["name"];
    className?: SeriesMappointConfig["className"];
    color?: SeriesMappointConfig["color"];
    events?: SeriesMappointConfig["events"];
    data?: SeriesMappointConfig["data"];
    options?: SeriesMappointConfig;
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
