/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
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
}
export declare function LineSeries(_props: LineSeriesProps): any;
export declare namespace LineSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Line;
