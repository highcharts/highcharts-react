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
import type { SeriesAreaRangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * AreaRange series
 */
declare const AreaRange: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaRangeSeries;
    type: string;
};
interface AreaRangeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAreaRangeOptions>;
    children?: React.ReactNode;
}
export declare function AreaRangeSeries(_props: AreaRangeSeriesProps): any;
export declare namespace AreaRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default AreaRange;
