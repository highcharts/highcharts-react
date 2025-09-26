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
import type { SeriesAreaSplineRangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * AreaSplineRange series
 */
declare const AreaSplineRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSplineRangeSeries;
    type: string;
};
interface AreaSplineRangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAreaSplineRangeOptions>;
    children?: React.ReactNode;
}
export declare function AreaSplineRangeSeries(_props: AreaSplineRangeSeriesProps): any;
export declare namespace AreaSplineRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default AreaSplineRange;
