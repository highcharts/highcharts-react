/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
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
    Series(_props: ColumnpyramidSeriesProps): React.JSX.Element;
    type: string;
};
interface ColumnpyramidSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesColumnpyramidOptions>;
}
export default Columnpyramid;
