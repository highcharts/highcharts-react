/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-07-17
 *
 */
import React from "react";
import type { SeriesLinearregressioninterceptOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Linearregressionintercept series
 */
declare const Linearregressionintercept: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearregressioninterceptSeries;
    type: string;
};
interface LinearregressioninterceptSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearregressioninterceptOptions>;
    children?: React.ReactNode;
}
export declare function LinearregressioninterceptSeries(_props: LinearregressioninterceptSeriesProps): any;
export declare namespace LinearregressioninterceptSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Linearregressionintercept;
