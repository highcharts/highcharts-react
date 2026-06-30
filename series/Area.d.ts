/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesAreaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Area series
 */
declare const Area: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSeries;
    type: string;
};
type SeriesAreaConfig = Omit<SeriesAreaOptions, "type">;
export interface AreaSeriesProps {
    id?: SeriesAreaConfig["id"];
    index?: SeriesAreaConfig["index"];
    name?: SeriesAreaConfig["name"];
    className?: SeriesAreaConfig["className"];
    color?: SeriesAreaConfig["color"];
    events?: SeriesAreaConfig["events"];
    data?: SeriesAreaConfig["data"];
    options?: SeriesAreaConfig;
}
export declare function AreaSeries(_props: AreaSeriesProps): any;
export declare namespace AreaSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Area;
