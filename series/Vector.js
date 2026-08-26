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
import "highcharts/es-modules/masters/modules/vector.src.js";
/**
 * A vector plot is a type of cartesian chart where each point has an X and Y
 * position, a length and a direction. Vectors are drawn as arrows.
 *
 * A ready-made chart with `chart.type` set to `vector`. Declare the data with
 * `<Vector.Series>`, or use `VectorSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Vector>
 *   <Vector.Series data={[1, 2, 3]} />
 * </Vector>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.vector
 */
function Vector(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vector",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A vector plot is a type of cartesian chart where each point has an X and Y
 * position, a length and a direction. Vectors are drawn as arrows.
 *
 * Renders the `vector` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <VectorSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.vector
 */
export function VectorSeries(_props) {
    return null;
}
VectorSeries.type = "Series";
Vector.Series = VectorSeries;
VectorSeries._HCReact = {
    type: "Series",
    HCOption: "series.vector",
    childOption: "series.vector",
};
Vector.type = "SeriesChart";
export default Vector;
