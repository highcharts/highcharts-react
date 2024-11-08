/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React from "react";
import type { SeriesSplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Spline series
 */
declare const Spline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SplineSeries;
    type: string;
};
interface SplineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSplineOptions>;
}
export declare function SplineSeries(_props: SplineSeriesProps): any;
export declare namespace SplineSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Spline;
