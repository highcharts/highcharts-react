/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React from "react";
import type { SeriesAreaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Area series
 */
declare const Area: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AreaSeries;
    type: string;
};
interface AreaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAreaOptions>;
    children?: React.ReactNode;
}
export declare function AreaSeries(_props: AreaSeriesProps): any;
export declare namespace AreaSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Area;
