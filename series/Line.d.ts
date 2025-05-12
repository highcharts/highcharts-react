/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-12
 *
 */
import React from "react";
import type { SeriesLineOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Line series
 */
declare const Line: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LineSeries;
    type: string;
};
interface LineSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLineOptions>;
    children?: React.ReactNode;
}
export declare function LineSeries(_props: LineSeriesProps): any;
export declare namespace LineSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Line;
