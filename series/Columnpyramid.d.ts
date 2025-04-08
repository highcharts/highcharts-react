/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */
import React from "react";
import type { SeriesColumnpyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Columnpyramid series
 */
declare const Columnpyramid: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnpyramidSeries;
    type: string;
};
interface ColumnpyramidSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesColumnpyramidOptions>;
    children?: React.ReactNode;
}
export declare function ColumnpyramidSeries(_props: ColumnpyramidSeriesProps): any;
export declare namespace ColumnpyramidSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Columnpyramid;
