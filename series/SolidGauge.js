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
import "highcharts/es-modules/masters/modules/solid-gauge.src.js";
/**
 * A solid gauge is a circular gauge where the value is indicated by a filled
 * arc, and the color of the arc may variate with the value.
 *
 * A ready-made chart with `chart.type` set to `solidgauge`. Declare the data
 * with `<SolidGauge.Series>`, or use `SolidGaugeSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <SolidGauge>
 *   <SolidGauge.Series data={[1, 2, 3]} />
 * </SolidGauge>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.solidgauge
 */
function SolidGauge(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "solidgauge",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A solid gauge is a circular gauge where the value is indicated by a filled
 * arc, and the color of the arc may variate with the value.
 *
 * Renders the `solidgauge` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <SolidGaugeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.solidgauge
 */
export function SolidGaugeSeries(_props) {
    return null;
}
SolidGaugeSeries.type = "Series";
SolidGauge.Series = SolidGaugeSeries;
SolidGaugeSeries._HCReact = {
    type: "Series",
    HCOption: "series.solidgauge",
    childOption: "series.solidgauge",
};
SolidGauge.type = "SeriesChart";
export default SolidGauge;
