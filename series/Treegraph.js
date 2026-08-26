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
import "highcharts/es-modules/masters/modules/treemap.src.js";
import "highcharts/es-modules/masters/modules/treegraph.src.js";
/**
 * A treegraph series is a diagram, which shows a relation between ancestors
 * and descendants with a clear parent - child relation. The best examples of
 * the dataStructures, which best reflect this chart are e.g. genealogy tree or
 * directory structure.
 *
 * A ready-made chart with `chart.type` set to `treegraph`. Declare the data
 * with `<Treegraph.Series>`, or use `TreegraphSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Treegraph>
 *   <Treegraph.Series data={[1, 2, 3]} />
 * </Treegraph>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.treegraph
 */
function Treegraph(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "treegraph",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A treegraph series is a diagram, which shows a relation between ancestors
 * and descendants with a clear parent - child relation. The best examples of
 * the dataStructures, which best reflect this chart are e.g. genealogy tree or
 * directory structure.
 *
 * Renders the `treegraph` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <TreegraphSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.treegraph
 */
export function TreegraphSeries(_props) {
    return null;
}
TreegraphSeries.type = "Series";
Treegraph.Series = TreegraphSeries;
TreegraphSeries._HCReact = {
    type: "Series",
    HCOption: "series.treegraph",
    childOption: "series.treegraph",
};
Treegraph.type = "SeriesChart";
export default Treegraph;
