/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
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
    children?: React.ReactNode;
}
export declare function LinearregressionangleSeries(_props: LinearregressionangleSeriesProps): any;
export declare namespace LinearregressionangleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Linearregressionangle;
