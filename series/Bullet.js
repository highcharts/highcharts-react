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
import "highcharts/es-modules/masters/modules/bullet.src.js";
/**
 * A bullet graph is a variation of a bar graph. The bullet graph features a
 * single measure, compares it to a target, and displays it in the context of
 * qualitative ranges of performance that could be set using
 * [plotBands](https://api.highcharts.com/highcharts/yAxis.plotBands) on
 * [yAxis](https://api.highcharts.com/highcharts/yAxis).
 *
 * A ready-made chart with `chart.type` set to `bullet`. Declare the data with
 * `<Bullet.Series>`, or use `BulletSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Bullet>
 *   <Bullet.Series data={[1, 2, 3]} />
 * </Bullet>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.bullet
 */
function Bullet(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bullet",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A bullet graph is a variation of a bar graph. The bullet graph features a
 * single measure, compares it to a target, and displays it in the context of
 * qualitative ranges of performance that could be set using
 * [plotBands](https://api.highcharts.com/highcharts/yAxis.plotBands) on
 * [yAxis](https://api.highcharts.com/highcharts/yAxis).
 *
 * Renders the `bullet` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <BulletSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.bullet
 */
export function BulletSeries(_props) {
    return null;
}
BulletSeries.type = "Series";
Bullet.Series = BulletSeries;
BulletSeries._HCReact = {
    type: "Series",
    HCOption: "series.bullet",
    childOption: "series.bullet",
};
Bullet.type = "SeriesChart";
export default Bullet;
