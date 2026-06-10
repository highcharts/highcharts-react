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
import type { SeriesBarOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Bar series
 */
declare const Bar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof BarSeries;
    type: string;
};
type SeriesBarConfig = Omit<SeriesBarOptions, "type">;
export interface BarSeriesProps {
    id?: SeriesBarConfig["id"];
    index?: SeriesBarConfig["index"];
    name?: SeriesBarConfig["name"];
    className?: SeriesBarConfig["className"];
    color?: SeriesBarConfig["color"];
    events?: SeriesBarConfig["events"];
    data?: SeriesBarConfig["data"];
    options?: SeriesBarConfig;
}
export declare function BarSeries(_props: BarSeriesProps): any;
export declare namespace BarSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Bar;
