/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-05-07
 *
 */
import React from "react";
import type { SeriesDependencywheelOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * DependencyWheel series
 */
declare const DependencyWheel: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof DependencyWheelSeries;
    type: string;
};
type SeriesDependencywheelConfig = Omit<SeriesDependencywheelOptions, "type">;
export interface DependencyWheelSeriesProps {
    id?: SeriesDependencywheelConfig["id"];
    index?: SeriesDependencywheelConfig["index"];
    name?: SeriesDependencywheelConfig["name"];
    className?: SeriesDependencywheelConfig["className"];
    color?: SeriesDependencywheelConfig["color"];
    events?: SeriesDependencywheelConfig["events"];
    data?: SeriesDependencywheelConfig["data"];
    options?: SeriesDependencywheelConfig;
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
