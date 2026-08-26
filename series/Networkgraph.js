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
import "highcharts/es-modules/masters/modules/networkgraph.src.js";
/**
 * A networkgraph is a type of relationship chart, where connections (links)
 * attracts nodes (points) and other nodes repulse each other.
 *
 * A ready-made chart with `chart.type` set to `networkgraph`. Declare the data
 * with `<Networkgraph.Series>`, or use `NetworkgraphSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Networkgraph>
 *   <Networkgraph.Series data={[1, 2, 3]} />
 * </Networkgraph>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.networkgraph
 */
function Networkgraph(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "networkgraph",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A networkgraph is a type of relationship chart, where connections (links)
 * attracts nodes (points) and other nodes repulse each other.
 *
 * Renders the `networkgraph` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <NetworkgraphSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.networkgraph
 */
export function NetworkgraphSeries(_props) {
    return null;
}
NetworkgraphSeries.type = "Series";
Networkgraph.Series = NetworkgraphSeries;
NetworkgraphSeries._HCReact = {
    type: "Series",
    HCOption: "series.networkgraph",
    childOption: "series.networkgraph",
};
Networkgraph.type = "SeriesChart";
export default Networkgraph;
