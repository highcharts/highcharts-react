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
import type { SeriesZigzagOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Zigzag series
 */
declare const Zigzag: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ZigzagSeries;
    type: string;
};
interface ZigzagSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesZigzagOptions>;
}
export declare function ZigzagSeries(_props: ZigzagSeriesProps): any;
export declare namespace ZigzagSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Zigzag;
