/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesMapdataOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * MapData series
 */
declare const MapData: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapDataSeries;
    type: string;
};
type SeriesMapdataConfig = Omit<SeriesMapdataOptions, "type">;
export interface MapDataSeriesProps {
    id?: SeriesMapdataConfig["id"];
    index?: SeriesMapdataConfig["index"];
    name?: SeriesMapdataConfig["name"];
    className?: SeriesMapdataConfig["className"];
    color?: SeriesMapdataConfig["color"];
    events?: SeriesMapdataConfig["events"];
    options?: SeriesMapdataConfig;
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
