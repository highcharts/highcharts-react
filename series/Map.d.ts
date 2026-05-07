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
import type { SeriesMapOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Map series
 */
declare const Map: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof MapSeries;
    type: string;
};
type SeriesMapConfig = Omit<SeriesMapOptions, "type">;
export interface MapSeriesProps {
    id?: SeriesMapConfig["id"];
    index?: SeriesMapConfig["index"];
    name?: SeriesMapConfig["name"];
    className?: SeriesMapConfig["className"];
    color?: SeriesMapConfig["color"];
    events?: SeriesMapConfig["events"];
    data?: SeriesMapConfig["data"];
    options?: SeriesMapConfig;
}
export declare function MapSeries(_props: MapSeriesProps): any;
export declare namespace MapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Map;
