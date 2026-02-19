/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesColumnPyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * ColumnPyramid series
 */
declare const ColumnPyramid: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnPyramidSeries;
    type: string;
};
export interface ColumnPyramidSeriesProps {
    type?: "columnpyramid";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesColumnPyramidOptions, "type">;
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
