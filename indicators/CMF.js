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
import "highcharts/es-modules/masters/indicators/indicators.src.js";
import "highcharts/es-modules/masters/indicators/cmf.src.js";
/**
 * Chaikin Money Flow indicator (cmf).
 *
 * A ready-made chart with `chart.type` set to `cmf`. Declare the data with
 * `<CMF.Series>`, or use `CMFSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <CMF>
 *   <CMF.Series options={{ linkedTo: 'prices' }} />
 * </CMF>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.cmf
 */
function CMF(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "cmf",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Chaikin Money Flow indicator (cmf).
 *
 * Renders the `cmf` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <CMFSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.cmf
 */
export function CMFSeries(_props) {
    return null;
}
CMFSeries.type = "Series";
CMF.Series = CMFSeries;
CMFSeries._HCReact = {
    type: "Series",
    HCOption: "series.cmf",
    childOption: "series.cmf",
};
CMF.type = "SeriesChart";
export default CMF;
