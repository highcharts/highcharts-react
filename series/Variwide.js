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
import "highcharts/es-modules/masters/modules/variwide.src.js";
/**
 * A variwide chart (related to marimekko chart) is a column chart with a
 * variable width expressing a third dimension.
 *
 * A ready-made chart with `chart.type` set to `variwide`. Declare the data
 * with `<Variwide.Series>`, or use `VariwideSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Variwide>
 *   <Variwide.Series data={[1, 2, 3]} />
 * </Variwide>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.variwide
 */
function Variwide(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "variwide",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A variwide chart (related to marimekko chart) is a column chart with a
 * variable width expressing a third dimension.
 *
 * Renders the `variwide` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <VariwideSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.variwide
 */
export function VariwideSeries(_props) {
    return null;
}
VariwideSeries.type = "Series";
Variwide.Series = VariwideSeries;
VariwideSeries._HCReact = {
    type: "Series",
    HCOption: "series.variwide",
    childOption: "series.variwide",
};
Variwide.type = "SeriesChart";
export default Variwide;
