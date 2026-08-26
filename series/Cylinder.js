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
/**
 * A cylinder graph is a variation of a 3d column graph. The cylinder graph
 * features cylindrical points.
 *
 * A ready-made chart with `chart.type` set to `cylinder`. Declare the data
 * with `<Cylinder.Series>`, or use `CylinderSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Cylinder>
 *   <Cylinder.Series data={[1, 2, 3]} />
 * </Cylinder>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.cylinder
 */
function Cylinder(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "cylinder",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A cylinder graph is a variation of a 3d column graph. The cylinder graph
 * features cylindrical points.
 *
 * Renders the `cylinder` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <CylinderSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.cylinder
 */
export function CylinderSeries(_props) {
    return null;
}
CylinderSeries.type = "Series";
Cylinder.Series = CylinderSeries;
CylinderSeries._HCReact = {
    type: "Series",
    HCOption: "series.cylinder",
    childOption: "series.cylinder",
};
Cylinder.type = "SeriesChart";
export default Cylinder;
