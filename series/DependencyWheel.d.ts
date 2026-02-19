/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesDependencyWheelOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * DependencyWheel series
 */
declare const DependencyWheel: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DependencyWheelSeries;
    type: string;
};
export interface DependencyWheelSeriesProps {
    type?: "dependencywheel";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesDependencyWheelOptions, "type">;
}
export declare function DependencyWheelSeries(_props: DependencyWheelSeriesProps): any;
export declare namespace DependencyWheelSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DependencyWheel;
