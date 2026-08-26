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
/**
 * A scatter plot uses cartesian coordinates to display values for two
 * variables for a set of data.
 *
 * A ready-made chart with `chart.type` set to `scatter`. Declare the data with
 * `<Scatter.Series>`, or use `ScatterSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Scatter>
 *   <Scatter.Series data={[1, 2, 3]} />
 * </Scatter>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.scatter
 */
function Scatter(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "scatter",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A scatter plot uses cartesian coordinates to display values for two
 * variables for a set of data.
 *
 * Renders the `scatter` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <ScatterSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.scatter
 */
export function ScatterSeries(_props) {
    return null;
}
ScatterSeries.type = "Series";
Scatter.Series = ScatterSeries;
ScatterSeries._HCReact = {
    type: "Series",
    HCOption: "series.scatter",
    childOption: "series.scatter",
};
Scatter.type = "SeriesChart";
export default Scatter;
