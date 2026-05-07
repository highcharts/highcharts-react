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
import type { SeriesHeikinashiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * HeikinAshi series
 */
declare const HeikinAshi: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof HeikinAshiSeries;
    type: string;
};
type SeriesHeikinashiConfig = Omit<SeriesHeikinashiOptions, "type">;
export interface HeikinAshiSeriesProps {
    id?: SeriesHeikinashiConfig["id"];
    index?: SeriesHeikinashiConfig["index"];
    name?: SeriesHeikinashiConfig["name"];
    className?: SeriesHeikinashiConfig["className"];
    color?: SeriesHeikinashiConfig["color"];
    events?: SeriesHeikinashiConfig["events"];
    data?: SeriesHeikinashiConfig["data"];
    options?: SeriesHeikinashiConfig;
}
export declare function HeikinAshiSeries(_props: HeikinAshiSeriesProps): any;
export declare namespace HeikinAshiSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default HeikinAshi;
