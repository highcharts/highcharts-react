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
import type { SeriesChaikinOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Chaikin series
 */
declare const Chaikin: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ChaikinSeries;
    type: string;
};
interface ChaikinSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesChaikinOptions>;
    children?: React.ReactNode;
}
export declare function ChaikinSeries(_props: ChaikinSeriesProps): any;
export declare namespace ChaikinSeries {
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
export default Chaikin;
