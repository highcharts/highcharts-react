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
import "highcharts/es-modules/masters/modules/coloraxis.src.js";
import "highcharts/es-modules/masters/modules/contour.src.js";
/**
 * A contour plot is a graphical representation of three-dimensional data
 *
 * A ready-made chart with `chart.type` set to `contour`. Declare the data with
 * `<Contour.Series>`, or use `ContourSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Contour>
 *   <Contour.Series data={[1, 2, 3]} />
 * </Contour>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.contour
 */
function Contour(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "contour",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A contour plot is a graphical representation of three-dimensional data
 *
 * Renders the `contour` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Chart>
 *   <ContourSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.contour
 */
export function ContourSeries(_props) {
    return null;
}
ContourSeries.type = "Series";
Contour.Series = ContourSeries;
ContourSeries._HCReact = {
    type: "Series",
    HCOption: "series.contour",
    childOption: "series.contour",
};
Contour.type = "SeriesChart";
export default Contour;
