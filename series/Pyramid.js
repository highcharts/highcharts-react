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
import "highcharts/es-modules/masters/modules/funnel.src.js";
/**
 * A pyramid series is a special type of funnel, without neck and reversed by
 * default.
 *
 * A ready-made chart with `chart.type` set to `pyramid`. Declare the data with
 * `<Pyramid.Series>`, or use `PyramidSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Pyramid>
 *   <Pyramid.Series data={[1, 2, 3]} />
 * </Pyramid>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pyramid
 */
function Pyramid(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pyramid",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A pyramid series is a special type of funnel, without neck and reversed by
 * default.
 *
 * Renders the `pyramid` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <PyramidSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pyramid
 */
export function PyramidSeries(_props) {
    return null;
}
PyramidSeries.type = "Series";
Pyramid.Series = PyramidSeries;
PyramidSeries._HCReact = {
    type: "Series",
    HCOption: "series.pyramid",
    childOption: "series.pyramid",
};
Pyramid.type = "SeriesChart";
export default Pyramid;
