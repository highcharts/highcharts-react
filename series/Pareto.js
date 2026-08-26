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
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "highcharts/es-modules/masters/modules/pareto.src.js";
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
function Pareto(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pareto",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
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
export function ParetoSeries(_props) {
    return null;
}
ParetoSeries.type = "Series";
Pareto.Series = ParetoSeries;
ParetoSeries._HCReact = {
    type: "Series",
    HCOption: "series.pareto",
    childOption: "series.pareto",
};
Pareto.type = "SeriesChart";
export default Pareto;
