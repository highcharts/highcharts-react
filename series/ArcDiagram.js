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
import "highcharts/es-modules/masters/modules/sankey.src.js";
import "highcharts/es-modules/masters/modules/arc-diagram.src.js";
/**
 * Arc diagram series is a chart drawing style in which the vertices of the
 * chart are positioned along a line on the Euclidean plane and the edges are
 * drawn as a semicircle in one of the two half-planes delimited by the line,
 * or as smooth curves formed by sequences of semicircles.
 *
 * A ready-made chart with `chart.type` set to `arcdiagram`. Declare the data
 * with `<ArcDiagram.Series>`, or use `ArcDiagramSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <ArcDiagram>
 *   <ArcDiagram.Series data={[1, 2, 3]} />
 * </ArcDiagram>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.arcdiagram
 */
function ArcDiagram(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "arcdiagram",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * Arc diagram series is a chart drawing style in which the vertices of the
 * chart are positioned along a line on the Euclidean plane and the edges are
 * drawn as a semicircle in one of the two half-planes delimited by the line,
 * or as smooth curves formed by sequences of semicircles.
 *
 * Renders the `arcdiagram` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <ArcDiagramSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.arcdiagram
 */
export function ArcDiagramSeries(_props) {
    return null;
}
ArcDiagramSeries.type = "Series";
ArcDiagram.Series = ArcDiagramSeries;
ArcDiagramSeries._HCReact = {
    type: "Series",
    HCOption: "series.arcdiagram",
    childOption: "series.arcdiagram",
};
ArcDiagram.type = "SeriesChart";
export default ArcDiagram;
