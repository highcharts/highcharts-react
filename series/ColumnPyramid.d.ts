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
import type { SeriesColumnpyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * ColumnPyramid series
 */
declare const ColumnPyramid: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnPyramidSeries;
    type: string;
};
type SeriesColumnpyramidConfig = Omit<SeriesColumnpyramidOptions, "type">;
export interface ColumnPyramidSeriesProps {
    id?: SeriesColumnpyramidConfig["id"];
    index?: SeriesColumnpyramidConfig["index"];
    name?: SeriesColumnpyramidConfig["name"];
    className?: SeriesColumnpyramidConfig["className"];
    color?: SeriesColumnpyramidConfig["color"];
    events?: SeriesColumnpyramidConfig["events"];
    data?: SeriesColumnpyramidConfig["data"];
    options?: SeriesColumnpyramidConfig;
}
export declare function ColumnPyramidSeries(_props: ColumnPyramidSeriesProps): any;
export declare namespace ColumnPyramidSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ColumnPyramid;
