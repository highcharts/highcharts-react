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
import type { SeriesScatter3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A 3D scatter plot uses x, y and z coordinates to display values for three
 * variables for a set of data.
 *
 * A ready-made chart with `chart.type` set to `scatter3d`. Declare the data
 * with `<Scatter3D.Series>`, or use `Scatter3DSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Scatter3D>
 *   <Scatter3D.Series data={[1, 2, 3]} />
 * </Scatter3D>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.scatter3d
 */
declare function Scatter3D(props: ICommonAttributes): React.JSX.Element;
declare namespace Scatter3D {
    export { Scatter3DSeries as Series };
    export var type: string;
}
type SeriesScatter3dConfig = Omit<SeriesScatter3dOptions, "type">;
/** Props for the `<Scatter3DSeries />` component. */
export interface Scatter3DSeriesProps {
    id?: SeriesScatter3dConfig["id"];
    index?: SeriesScatter3dConfig["index"];
    name?: SeriesScatter3dConfig["name"];
    className?: SeriesScatter3dConfig["className"];
    color?: SeriesScatter3dConfig["color"];
    events?: SeriesScatter3dConfig["events"];
    data?: SeriesScatter3dConfig["data"];
    options?: SeriesScatter3dConfig;
}
/**
 * A 3D scatter plot uses x, y and z coordinates to display values for three
 * variables for a set of data.
 *
 * Renders the `scatter3d` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <Scatter3DSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.scatter3d
 */
export declare function Scatter3DSeries(_props: Scatter3DSeriesProps): any;
export declare namespace Scatter3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Scatter3D;
