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
import type { SeriesLinearregressionOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Linearregression series
 */
declare const Linearregression: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearregressionSeries;
    type: string;
};
interface LinearregressionSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearregressionOptions>;
}
export declare function LinearregressionSeries(_props: LinearregressionSeriesProps): any;
export declare namespace LinearregressionSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Linearregression;
