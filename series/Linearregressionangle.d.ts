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
import type { SeriesLinearregressionangleOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Linearregressionangle series
 */
declare const Linearregressionangle: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearregressionangleSeries;
    type: string;
};
interface LinearregressionangleSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearregressionangleOptions>;
}
export declare function LinearregressionangleSeries(_props: LinearregressionangleSeriesProps): any;
export declare namespace LinearregressionangleSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Linearregressionangle;
