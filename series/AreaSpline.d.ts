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
import type { SeriesAreaSplineOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * AreaSpline series
 */
declare const AreaSpline: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSplineSeries;
    type: string;
};
export interface AreaSplineSeriesProps {
    type?: "areaspline";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesAreaSplineOptions, "type">;
}
export declare function AreaSplineSeries(_props: AreaSplineSeriesProps): any;
export declare namespace AreaSplineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaSpline;
