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
import "highcharts/es-modules/masters/modules/heatmap.src.js";
/**
 * A heatmap is a graphical representation of data where the individual values
 * contained in a matrix are represented as colors.
 *
 * A ready-made chart with `chart.type` set to `heatmap`. Declare the data with
 * `<Heatmap.Series>`, or use `HeatmapSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Heatmap>
 *   <Heatmap.Series data={[1, 2, 3]} />
 * </Heatmap>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.heatmap
 */
function Heatmap(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "heatmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A heatmap is a graphical representation of data where the individual values
 * contained in a matrix are represented as colors.
 *
 * Renders the `heatmap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Chart>
 *   <HeatmapSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.heatmap
 */
export function HeatmapSeries(_props) {
    return null;
}
HeatmapSeries.type = "Series";
Heatmap.Series = HeatmapSeries;
HeatmapSeries._HCReact = {
    type: "Series",
    HCOption: "series.heatmap",
    childOption: "series.heatmap",
};
Heatmap.type = "SeriesChart";
export default Heatmap;
