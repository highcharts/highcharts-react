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
import "highcharts/es-modules/masters/modules/pyramid3d.src.js";
/**
 * A pyramid3d is a 3d version of pyramid series type. Pyramid charts are a
 * type of chart often used to visualize stages in a sales project, where the
 * top are the initial stages with the most clients.
 *
 * A ready-made chart with `chart.type` set to `pyramid3d`. Declare the data
 * with `<Pyramid3D.Series>`, or use `Pyramid3DSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Pyramid3D>
 *   <Pyramid3D.Series data={[1, 2, 3]} />
 * </Pyramid3D>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pyramid3d
 */
function Pyramid3D(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pyramid3d",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A pyramid3d is a 3d version of pyramid series type. Pyramid charts are a
 * type of chart often used to visualize stages in a sales project, where the
 * top are the initial stages with the most clients.
 *
 * Renders the `pyramid3d` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <Pyramid3DSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pyramid3d
 */
export function Pyramid3DSeries(_props) {
    return null;
}
Pyramid3DSeries.type = "Series";
Pyramid3D.Series = Pyramid3DSeries;
Pyramid3DSeries._HCReact = {
    type: "Series",
    HCOption: "series.pyramid3d",
    childOption: "series.pyramid3d",
};
Pyramid3D.type = "SeriesChart";
export default Pyramid3D;
