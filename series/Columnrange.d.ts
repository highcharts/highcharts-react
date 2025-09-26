/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesColumnRangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * ColumnRange series
 */
declare const ColumnRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnRangeSeries;
    type: string;
};
interface ColumnRangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesColumnRangeOptions>;
    children?: React.ReactNode;
}
export declare function ColumnRangeSeries(_props: ColumnRangeSeriesProps): any;
export declare namespace ColumnRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default ColumnRange;
