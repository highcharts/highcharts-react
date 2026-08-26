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
import "highcharts/es-modules/masters/highcharts-more.src.js";
/**
 * A polygon series can be used to draw any freeform shape in the cartesian
 * coordinate system. A fill is applied with the `color` option, and stroke is
 * applied through `lineWidth` and `lineColor` options.
 *
 * A ready-made chart with `chart.type` set to `polygon`. Declare the data with
 * `<Polygon.Series>`, or use `PolygonSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Polygon>
 *   <Polygon.Series data={[1, 2, 3]} />
 * </Polygon>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.polygon
 */
function Polygon(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "polygon",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A polygon series can be used to draw any freeform shape in the cartesian
 * coordinate system. A fill is applied with the `color` option, and stroke is
 * applied through `lineWidth` and `lineColor` options.
 *
 * Renders the `polygon` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <PolygonSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.polygon
 */
export function PolygonSeries(_props) {
    return null;
}
PolygonSeries.type = "Series";
Polygon.Series = PolygonSeries;
PolygonSeries._HCReact = {
    type: "Series",
    HCOption: "series.polygon",
    childOption: "series.polygon",
};
Polygon.type = "SeriesChart";
export default Polygon;
