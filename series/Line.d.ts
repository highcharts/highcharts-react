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
import type { SeriesLineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Line series
 */
declare const Line: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LineSeries;
    type: string;
};
type SeriesLineConfig = Omit<SeriesLineOptions, "type">;
export interface LineSeriesProps {
    id?: SeriesLineConfig["id"];
    index?: SeriesLineConfig["index"];
    name?: SeriesLineConfig["name"];
    className?: SeriesLineConfig["className"];
    color?: SeriesLineConfig["color"];
    events?: SeriesLineConfig["events"];
    data?: SeriesLineConfig["data"];
    options?: SeriesLineConfig;
}
export declare function LineSeries(_props: LineSeriesProps): any;
export declare namespace LineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Line;
