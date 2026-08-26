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
import "highcharts/es-modules/masters/highcharts-3d.src.js";
/**
 * A 3D scatter plot uses x, y and z coordinates to display values for three
 * variables for a set of data.
 *
 * A ready-made chart with `chart.type` set to `scatter3d`. Declare the data
 * with `<Scatter3D.Series>`, or use `Scatter3DSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Scatter3D>
 *   <Scatter3D.Series data={[1, 2, 3]} />
 * </Scatter3D>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.scatter3d
 */
function Scatter3D(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "scatter3d",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A 3D scatter plot uses x, y and z coordinates to display values for three
 * variables for a set of data.
 *
 * Renders the `scatter3d` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <Scatter3DSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.scatter3d
 */
export function Scatter3DSeries(_props) {
    return null;
}
Scatter3DSeries.type = "Series";
Scatter3D.Series = Scatter3DSeries;
Scatter3DSeries._HCReact = {
    type: "Series",
    HCOption: "series.scatter3d",
    childOption: "series.scatter3d",
};
Scatter3D.type = "SeriesChart";
export default Scatter3D;
