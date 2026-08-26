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
import type { SeriesParetoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A pareto diagram is a type of chart that contains both bars and a line
 * graph, where individual values are represented in descending order by bars,
 * and the cumulative total is represented by the line.
 *
 * A ready-made chart with `chart.type` set to `pareto`. Declare the data with
 * `<Pareto.Series>`, or use `ParetoSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Pareto>
 *   <Pareto.Series data={[1, 2, 3]} />
 * </Pareto>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pareto
 */
declare function Pareto(props: ICommonAttributes): React.JSX.Element;
declare namespace Pareto {
    export { ParetoSeries as Series };
    export var type: string;
}
type SeriesParetoConfig = Omit<SeriesParetoOptions, "type">;
/** Props for the `<ParetoSeries />` component. */
export interface ParetoSeriesProps {
    id?: SeriesParetoConfig["id"];
    index?: SeriesParetoConfig["index"];
    name?: SeriesParetoConfig["name"];
    className?: SeriesParetoConfig["className"];
    color?: SeriesParetoConfig["color"];
    events?: SeriesParetoConfig["events"];
    data?: SeriesParetoConfig["data"];
    options?: SeriesParetoConfig;
}
/**
 * A pareto diagram is a type of chart that contains both bars and a line
 * graph, where individual values are represented in descending order by bars,
 * and the cumulative total is represented by the line.
 *
 * Renders the `pareto` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <ParetoSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pareto
 */
export declare function ParetoSeries(_props: ParetoSeriesProps): any;
export declare namespace ParetoSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pareto;
