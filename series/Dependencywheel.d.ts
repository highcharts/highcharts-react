/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */
import React from "react";
import type { SeriesDependencywheelOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Dependencywheel series
 */
declare const Dependencywheel: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DependencywheelSeries;
    type: string;
};
interface DependencywheelSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDependencywheelOptions>;
    children?: React.ReactNode;
}
export declare function DependencywheelSeries(_props: DependencywheelSeriesProps): any;
export declare namespace DependencywheelSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Dependencywheel;
