/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesColumnPyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * ColumnPyramid series
 */
declare const ColumnPyramid: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnPyramidSeries;
    type: string;
};
interface ColumnPyramidSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesColumnPyramidOptions>;
    children?: React.ReactNode;
}
export declare function ColumnPyramidSeries(_props: ColumnPyramidSeriesProps): any;
export declare namespace ColumnPyramidSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default ColumnPyramid;
