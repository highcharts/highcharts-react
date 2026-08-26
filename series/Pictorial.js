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
import "highcharts/es-modules/masters/modules/pictorial.src.js";
/**
 * A pictorial chart uses vector images to represents the data. The shape of
 * the data point is taken from the path parameter.
 *
 * A ready-made chart with `chart.type` set to `pictorial`. Declare the data
 * with `<Pictorial.Series>`, or use `PictorialSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Pictorial>
 *   <Pictorial.Series data={[1, 2, 3]} />
 * </Pictorial>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pictorial
 */
function Pictorial(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pictorial",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A pictorial chart uses vector images to represents the data. The shape of
 * the data point is taken from the path parameter.
 *
 * Renders the `pictorial` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <PictorialSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pictorial
 */
export function PictorialSeries(_props) {
    return null;
}
PictorialSeries.type = "Series";
Pictorial.Series = PictorialSeries;
PictorialSeries._HCReact = {
    type: "Series",
    HCOption: "series.pictorial",
    childOption: "series.pictorial",
};
Pictorial.type = "SeriesChart";
export default Pictorial;
