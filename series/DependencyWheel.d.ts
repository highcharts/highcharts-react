/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React from "react";
import type { SeriesDependencywheelOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * A dependency wheel chart is a type of flow diagram, where all nodes are laid
 * out in a circle, and the flow between the are drawn as link bands.
 *
 * A ready-made chart with `chart.type` set to `dependencywheel`. Declare the
 * data with `<DependencyWheel.Series>`, or use `DependencyWheelSeries` inside
 * a plain `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <DependencyWheel>
 *   <DependencyWheel.Series data={[1, 2, 3]} />
 * </DependencyWheel>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.dependencywheel
 */
declare function DependencyWheel(props: ICommonAttributes): React.JSX.Element;
declare namespace DependencyWheel {
    export { DependencyWheelSeries as Series };
    export var type: string;
}
type SeriesDependencywheelConfig = Omit<SeriesDependencywheelOptions, "type">;
/** Props for the `<DependencyWheelSeries />` component. */
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
/**
 * A dependency wheel chart is a type of flow diagram, where all nodes are laid
 * out in a circle, and the flow between the are drawn as link bands.
 *
 * Renders the `dependencywheel` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <DependencyWheelSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.dependencywheel
 */
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
