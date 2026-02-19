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
import type { SeriesColumnRangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * ColumnRange series
 */
declare const ColumnRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnRangeSeries;
    type: string;
};
export interface ColumnRangeSeriesProps {
    type?: "columnrange";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesColumnRangeOptions, "type">;
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
