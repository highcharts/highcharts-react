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
import type { SeriesArearangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * AreaRange series
 */
declare const AreaRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaRangeSeries;
    type: string;
};
type SeriesArearangeConfig = Omit<SeriesArearangeOptions, "type">;
export interface AreaRangeSeriesProps {
    id?: SeriesArearangeConfig["id"];
    index?: SeriesArearangeConfig["index"];
    name?: SeriesArearangeConfig["name"];
    className?: SeriesArearangeConfig["className"];
    color?: SeriesArearangeConfig["color"];
    events?: SeriesArearangeConfig["events"];
    data?: SeriesArearangeConfig["data"];
    options?: SeriesArearangeConfig;
}
export declare function AreaRangeSeries(_props: AreaRangeSeriesProps): any;
export declare namespace AreaRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaRange;
