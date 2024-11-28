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
import type { SeriesLinearregressionslopeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Linearregressionslope series
 */
declare const Linearregressionslope: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof LinearregressionslopeSeries;
    type: string;
};
interface LinearregressionslopeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesLinearregressionslopeOptions>;
    children?: React.ReactNode;
}
export declare function LinearregressionslopeSeries(_props: LinearregressionslopeSeriesProps): any;
export declare namespace LinearregressionslopeSeries {
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
export default Linearregressionslope;
