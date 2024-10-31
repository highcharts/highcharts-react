/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
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
}
export declare function ColumnpyramidSeries(_props: ColumnpyramidSeriesProps): any;
export declare namespace ColumnpyramidSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Columnpyramid;
