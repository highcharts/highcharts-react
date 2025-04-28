/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-28
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
    children?: React.ReactNode;
}
export declare function SplineSeries(_props: SplineSeriesProps): any;
export declare namespace SplineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Spline;
