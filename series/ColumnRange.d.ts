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
import type { SeriesColumnrangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * ColumnRange series
 */
declare const ColumnRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnRangeSeries;
    type: string;
};
type SeriesColumnrangeConfig = Omit<SeriesColumnrangeOptions, "type">;
export interface ColumnRangeSeriesProps {
    id?: SeriesColumnrangeConfig["id"];
    index?: SeriesColumnrangeConfig["index"];
    name?: SeriesColumnrangeConfig["name"];
    className?: SeriesColumnrangeConfig["className"];
    color?: SeriesColumnrangeConfig["color"];
    events?: SeriesColumnrangeConfig["events"];
    data?: SeriesColumnrangeConfig["data"];
    options?: SeriesColumnrangeConfig;
}
export declare function ColumnRangeSeries(_props: ColumnRangeSeriesProps): any;
export declare namespace ColumnRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ColumnRange;
