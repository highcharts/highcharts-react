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
import "highcharts/es-modules/masters/indicators/tema.src.js";
import "highcharts/es-modules/masters/indicators/trix.src.js";
/**
 * Triple exponential average (TRIX) oscillator. This series requires
 * `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `trix`. Declare the data with
 * `<TRIX.Series>`, or use `TRIXSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <TRIX>
 *   <TRIX.Series options={{ linkedTo: 'prices' }} />
 * </TRIX>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.trix
 */
function TRIX(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "trix",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Triple exponential average (TRIX) oscillator. This series requires
 * `linkedTo` option to be set.
 *
 * Renders the `trix` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <TRIXSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.trix
 */
export function TRIXSeries(_props) {
    return null;
}
TRIXSeries.type = "Series";
TRIX.Series = TRIXSeries;
TRIXSeries._HCReact = {
    type: "Series",
    HCOption: "series.trix",
    childOption: "series.trix",
};
TRIX.type = "SeriesChart";
export default TRIX;
