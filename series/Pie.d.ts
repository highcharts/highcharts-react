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
import type { SeriesPieOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * A pie chart is a circular graphic which is divided into slices to illustrate
 * numerical proportion.
 *
 * A ready-made chart with `chart.type` set to `pie`. Declare the data with
 * `<Pie.Series>`, or use `PieSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Pie>
 *   <Pie.Series data={[1, 2, 3]} />
 * </Pie>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pie
 */
declare function Pie(props: ICommonAttributes): React.JSX.Element;
declare namespace Pie {
    export { PieSeries as Series };
    export var type: string;
}
type SeriesPieConfig = Omit<SeriesPieOptions, "type">;
/** Props for the `<PieSeries />` component. */
export interface PieSeriesProps {
    id?: SeriesPieConfig["id"];
    index?: SeriesPieConfig["index"];
    name?: SeriesPieConfig["name"];
    className?: SeriesPieConfig["className"];
    color?: SeriesPieConfig["color"];
    events?: SeriesPieConfig["events"];
    data?: SeriesPieConfig["data"];
    options?: SeriesPieConfig;
}
/**
 * A pie chart is a circular graphic which is divided into slices to illustrate
 * numerical proportion.
 *
 * Renders the `pie` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Chart>
 *   <PieSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pie
 */
export declare function PieSeries(_props: PieSeriesProps): any;
export declare namespace PieSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pie;
