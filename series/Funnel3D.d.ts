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
import type { SeriesFunnel3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * A funnel3d is a 3d version of funnel series type. Funnel charts are a type
 * of chart often used to visualize stages in a sales project, where the top
 * are the initial stages with the most clients.
 *
 * A ready-made chart with `chart.type` set to `funnel3d`. Declare the data
 * with `<Funnel3D.Series>`, or use `Funnel3DSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Funnel3D>
 *   <Funnel3D.Series data={[1, 2, 3]} />
 * </Funnel3D>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.funnel3d
 */
declare function Funnel3D(props: ICommonAttributes): React.JSX.Element;
declare namespace Funnel3D {
    export { Funnel3DSeries as Series };
    export var type: string;
}
type SeriesFunnel3dConfig = Omit<SeriesFunnel3dOptions, "type">;
/** Props for the `<Funnel3DSeries />` component. */
export interface Funnel3DSeriesProps {
    id?: SeriesFunnel3dConfig["id"];
    index?: SeriesFunnel3dConfig["index"];
    name?: SeriesFunnel3dConfig["name"];
    className?: SeriesFunnel3dConfig["className"];
    color?: SeriesFunnel3dConfig["color"];
    events?: SeriesFunnel3dConfig["events"];
    data?: SeriesFunnel3dConfig["data"];
    options?: SeriesFunnel3dConfig;
}
/**
 * A funnel3d is a 3d version of funnel series type. Funnel charts are a type
 * of chart often used to visualize stages in a sales project, where the top
 * are the initial stages with the most clients.
 *
 * Renders the `funnel3d` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <Funnel3DSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.funnel3d
 */
export declare function Funnel3DSeries(_props: Funnel3DSeriesProps): any;
export declare namespace Funnel3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Funnel3D;
