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
import "highcharts/es-modules/masters/modules/heikinashi.src.js";
/**
 * An HeikinAshi series is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per data
 * point.
 *
 * A ready-made chart with `chart.type` set to `heikinashi`. Declare the data
 * with `<HeikinAshi.Series>`, or use `HeikinAshiSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <HeikinAshi>
 *   <HeikinAshi.Series data={[1, 2, 3]} />
 * </HeikinAshi>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.heikinashi
 */
function HeikinAshi(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "heikinashi",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * An HeikinAshi series is a style of financial chart used to describe price
 * movements over time. It displays open, high, low and close values per data
 * point.
 *
 * Renders the `heikinashi` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <HeikinAshiSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.heikinashi
 */
export function HeikinAshiSeries(_props) {
    return null;
}
HeikinAshiSeries.type = "Series";
HeikinAshi.Series = HeikinAshiSeries;
HeikinAshiSeries._HCReact = {
    type: "Series",
    HCOption: "series.heikinashi",
    childOption: "series.heikinashi",
};
HeikinAshi.type = "SeriesChart";
export default HeikinAshi;
