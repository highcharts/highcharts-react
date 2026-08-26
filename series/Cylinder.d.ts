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
import type { SeriesCylinderOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * A cylinder graph is a variation of a 3d column graph. The cylinder graph
 * features cylindrical points.
 *
 * A ready-made chart with `chart.type` set to `cylinder`. Declare the data
 * with `<Cylinder.Series>`, or use `CylinderSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Cylinder>
 *   <Cylinder.Series data={[1, 2, 3]} />
 * </Cylinder>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.cylinder
 */
declare function Cylinder(props: ICommonAttributes): React.JSX.Element;
declare namespace Cylinder {
    export { CylinderSeries as Series };
    export var type: string;
}
type SeriesCylinderConfig = Omit<SeriesCylinderOptions, "type">;
/** Props for the `<CylinderSeries />` component. */
export interface CylinderSeriesProps {
    id?: SeriesCylinderConfig["id"];
    index?: SeriesCylinderConfig["index"];
    name?: SeriesCylinderConfig["name"];
    className?: SeriesCylinderConfig["className"];
    color?: SeriesCylinderConfig["color"];
    events?: SeriesCylinderConfig["events"];
    data?: SeriesCylinderConfig["data"];
    options?: SeriesCylinderConfig;
}
/**
 * A cylinder graph is a variation of a 3d column graph. The cylinder graph
 * features cylindrical points.
 *
 * Renders the `cylinder` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <CylinderSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.cylinder
 */
export declare function CylinderSeries(_props: CylinderSeriesProps): any;
export declare namespace CylinderSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Cylinder;
