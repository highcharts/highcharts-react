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
import type { SeriesStackOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Stack series
 */
declare const Stack: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof StackSeries;
    type: string;
};
type SeriesStackConfig = Omit<SeriesStackOptions, "type">;
export interface StackSeriesProps {
    id?: SeriesStackConfig["id"];
    index?: SeriesStackConfig["index"];
    name?: SeriesStackConfig["name"];
    className?: SeriesStackConfig["className"];
    color?: SeriesStackConfig["color"];
    events?: SeriesStackConfig["events"];
    options?: SeriesStackConfig;
}
export declare function StackSeries(_props: StackSeriesProps): any;
export declare namespace StackSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Stack;
