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
import type { SeriesLollipopOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Lollipop series
 */
declare const Lollipop: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LollipopSeries;
    type: string;
};
type SeriesLollipopConfig = Omit<SeriesLollipopOptions, "type">;
export interface LollipopSeriesProps {
    id?: SeriesLollipopConfig["id"];
    index?: SeriesLollipopConfig["index"];
    name?: SeriesLollipopConfig["name"];
    className?: SeriesLollipopConfig["className"];
    color?: SeriesLollipopConfig["color"];
    events?: SeriesLollipopConfig["events"];
    data?: SeriesLollipopConfig["data"];
    options?: SeriesLollipopConfig;
}
export declare function LollipopSeries(_props: LollipopSeriesProps): any;
export declare namespace LollipopSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Lollipop;
