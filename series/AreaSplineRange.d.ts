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
import type { SeriesAreaSplineRangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * AreaSplineRange series
 */
declare const AreaSplineRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSplineRangeSeries;
    type: string;
};
export interface AreaSplineRangeSeriesProps {
    type?: "areasplinerange";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesAreaSplineRangeOptions, "type">;
}
export declare function AreaSplineRangeSeries(_props: AreaSplineRangeSeriesProps): any;
export declare namespace AreaSplineRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AreaSplineRange;
