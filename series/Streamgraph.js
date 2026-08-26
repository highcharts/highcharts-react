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
import "highcharts/es-modules/masters/modules/streamgraph.src.js";
/**
 * A streamgraph is a type of stacked area graph which is displaced around a
 * central axis, resulting in a flowing, organic shape.
 *
 * A ready-made chart with `chart.type` set to `streamgraph`. Declare the data
 * with `<Streamgraph.Series>`, or use `StreamgraphSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Streamgraph>
 *   <Streamgraph.Series data={[1, 2, 3]} />
 * </Streamgraph>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.streamgraph
 */
function Streamgraph(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "streamgraph",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A streamgraph is a type of stacked area graph which is displaced around a
 * central axis, resulting in a flowing, organic shape.
 *
 * Renders the `streamgraph` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <StreamgraphSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.streamgraph
 */
export function StreamgraphSeries(_props) {
    return null;
}
StreamgraphSeries.type = "Series";
Streamgraph.Series = StreamgraphSeries;
StreamgraphSeries._HCReact = {
    type: "Series",
    HCOption: "series.streamgraph",
    childOption: "series.streamgraph",
};
Streamgraph.type = "SeriesChart";
export default Streamgraph;
