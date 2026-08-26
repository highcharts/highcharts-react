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
import type { SeriesPyramid3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";




/**
 * A pyramid3d is a 3d version of pyramid series type. Pyramid charts are a
 * type of chart often used to visualize stages in a sales project, where the
 * top are the initial stages with the most clients.
 *
 * A ready-made chart with `chart.type` set to `pyramid3d`. Declare the data
 * with `<Pyramid3D.Series>`, or use `Pyramid3DSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Pyramid3D>
 *   <Pyramid3D.Series data={[1, 2, 3]} />
 * </Pyramid3D>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pyramid3d
 */
declare function Pyramid3D(props: ICommonAttributes): React.JSX.Element;
declare namespace Pyramid3D {
    export { Pyramid3DSeries as Series };
    export var type: string;
}
type SeriesPyramid3dConfig = Omit<SeriesPyramid3dOptions, "type">;
/** Props for the `<Pyramid3DSeries />` component. */
export interface Pyramid3DSeriesProps {
    id?: SeriesPyramid3dConfig["id"];
    index?: SeriesPyramid3dConfig["index"];
    name?: SeriesPyramid3dConfig["name"];
    className?: SeriesPyramid3dConfig["className"];
    color?: SeriesPyramid3dConfig["color"];
    events?: SeriesPyramid3dConfig["events"];
    data?: SeriesPyramid3dConfig["data"];
    options?: SeriesPyramid3dConfig;
}
/**
 * A pyramid3d is a 3d version of pyramid series type. Pyramid charts are a
 * type of chart often used to visualize stages in a sales project, where the
 * top are the initial stages with the most clients.
 *
 * Renders the `pyramid3d` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <Pyramid3DSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pyramid3d
 */
export declare function Pyramid3DSeries(_props: Pyramid3DSeriesProps): any;
export declare namespace Pyramid3DSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pyramid3D;
