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
import "highcharts/es-modules/masters/modules/cylinder.src.js";
import "highcharts/es-modules/masters/modules/funnel3d.src.js";
/**
 * A funnel3d is a 3d version of funnel series type. Funnel charts are a type
 * of chart often used to visualize stages in a sales project, where the top
 * are the initial stages with the most clients.
 *
 * A ready-made chart with `chart.type` set to `funnel3d`. Declare the data
 * with `<Funnel3D.Series>`, or use `Funnel3DSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Funnel3D>
 *   <Funnel3D.Series data={[1, 2, 3]} />
 * </Funnel3D>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.funnel3d
 */
function Funnel3D(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "funnel3d",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A funnel3d is a 3d version of funnel series type. Funnel charts are a type
 * of chart often used to visualize stages in a sales project, where the top
 * are the initial stages with the most clients.
 *
 * Renders the `funnel3d` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <Funnel3DSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.funnel3d
 */
export function Funnel3DSeries(_props) {
    return null;
}
Funnel3DSeries.type = "Series";
Funnel3D.Series = Funnel3DSeries;
Funnel3DSeries._HCReact = {
    type: "Series",
    HCOption: "series.funnel3d",
    childOption: "series.funnel3d",
};
Funnel3D.type = "SeriesChart";
export default Funnel3D;
