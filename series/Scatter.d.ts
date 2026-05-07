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
import type { SeriesScatterOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Scatter series
 */
declare const Scatter: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ScatterSeries;
    type: string;
};
type SeriesScatterConfig = Omit<SeriesScatterOptions, "type">;
export interface ScatterSeriesProps {
    id?: SeriesScatterConfig["id"];
    index?: SeriesScatterConfig["index"];
    name?: SeriesScatterConfig["name"];
    className?: SeriesScatterConfig["className"];
    color?: SeriesScatterConfig["color"];
    events?: SeriesScatterConfig["events"];
    data?: SeriesScatterConfig["data"];
    options?: SeriesScatterConfig;
}
export declare function ScatterSeries(_props: ScatterSeriesProps): any;
export declare namespace ScatterSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Scatter;
