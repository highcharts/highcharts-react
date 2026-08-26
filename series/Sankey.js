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
/**
 * A sankey diagram is a type of flow diagram, in which the width of the link
 * between two nodes is shown proportionally to the flow quantity.
 *
 * A ready-made chart with `chart.type` set to `sankey`. Declare the data with
 * `<Sankey.Series>`, or use `SankeySeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Sankey>
 *   <Sankey.Series data={[1, 2, 3]} />
 * </Sankey>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.sankey
 */
function Sankey(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sankey",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A sankey diagram is a type of flow diagram, in which the width of the link
 * between two nodes is shown proportionally to the flow quantity.
 *
 * Renders the `sankey` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <SankeySeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.sankey
 */
export function SankeySeries(_props) {
    return null;
}
SankeySeries.type = "Series";
Sankey.Series = SankeySeries;
SankeySeries._HCReact = {
    type: "Series",
    HCOption: "series.sankey",
    childOption: "series.sankey",
};
Sankey.type = "SeriesChart";
export default Sankey;
