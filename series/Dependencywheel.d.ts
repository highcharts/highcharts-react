/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React from "react";
import type { SeriesDependencyWheelOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * DependencyWheel series
 */
declare const DependencyWheel: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DependencyWheelSeries;
    type: string;
};
interface DependencyWheelSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDependencyWheelOptions>;
    children?: React.ReactNode;
}
export declare function DependencyWheelSeries(_props: DependencyWheelSeriesProps): any;
export declare namespace DependencyWheelSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default DependencyWheel;
