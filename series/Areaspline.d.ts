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
import type { SeriesAreaSplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * AreaSpline series
 */
declare const AreaSpline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSplineSeries;
    type: string;
};
interface AreaSplineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAreaSplineOptions>;
    children?: React.ReactNode;
}
export declare function AreaSplineSeries(_props: AreaSplineSeriesProps): any;
export declare namespace AreaSplineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default AreaSpline;
