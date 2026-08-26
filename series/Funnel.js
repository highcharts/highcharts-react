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
import "highcharts/es-modules/masters/modules/funnel.src.js";
/**
 * Funnel charts are a type of chart often used to visualize stages in a sales
 * project, where the top are the initial stages with the most clients. It
 * requires that the modules/funnel.js file is loaded.
 *
 * A ready-made chart with `chart.type` set to `funnel`. Declare the data with
 * `<Funnel.Series>`, or use `FunnelSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Funnel>
 *   <Funnel.Series data={[1, 2, 3]} />
 * </Funnel>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.funnel
 */
function Funnel(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "funnel",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * Funnel charts are a type of chart often used to visualize stages in a sales
 * project, where the top are the initial stages with the most clients. It
 * requires that the modules/funnel.js file is loaded.
 *
 * Renders the `funnel` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <FunnelSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.funnel
 */
export function FunnelSeries(_props) {
    return null;
}
FunnelSeries.type = "Series";
Funnel.Series = FunnelSeries;
FunnelSeries._HCReact = {
    type: "Series",
    HCOption: "series.funnel",
    childOption: "series.funnel",
};
Funnel.type = "SeriesChart";
export default Funnel;
