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
import "highcharts/es-modules/masters/modules/windbarb.src.js";
/**
 * Wind barbs are a convenient way to represent wind speed and direction in one
 * graphical form. Wind direction is given by the stem direction, and wind
 * speed by the number and shape of barbs.
 *
 * A ready-made chart with `chart.type` set to `windbarb`. Declare the data
 * with `<Windbarb.Series>`, or use `WindbarbSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Windbarb>
 *   <Windbarb.Series data={[1, 2, 3]} />
 * </Windbarb>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.windbarb
 */
function Windbarb(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "windbarb",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * Wind barbs are a convenient way to represent wind speed and direction in one
 * graphical form. Wind direction is given by the stem direction, and wind
 * speed by the number and shape of barbs.
 *
 * Renders the `windbarb` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <WindbarbSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.windbarb
 */
export function WindbarbSeries(_props) {
    return null;
}
WindbarbSeries.type = "Series";
Windbarb.Series = WindbarbSeries;
WindbarbSeries._HCReact = {
    type: "Series",
    HCOption: "series.windbarb",
    childOption: "series.windbarb",
};
Windbarb.type = "SeriesChart";
export default Windbarb;
