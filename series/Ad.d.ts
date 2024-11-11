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
import type { SeriesAdOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Ad series
 */
declare const Ad: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AdSeries;
    type: string;
};
interface AdSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAdOptions>;
}
export declare function AdSeries(_props: AdSeriesProps): any;
export declare namespace AdSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Ad;