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
import "highcharts/es-modules/masters/indicators/aroon.src.js";
import "highcharts/es-modules/masters/indicators/aroon-oscillator.src.js";
/**
 * Aroon Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/aroon.js`.
 *
 * A ready-made chart with `chart.type` set to `aroonoscillator`. Declare the
 * data with `<AroonOscillator.Series>`, or use `AroonOscillatorSeries` inside
 * a plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <AroonOscillator>
 *   <AroonOscillator.Series options={{ linkedTo: 'prices' }} />
 * </AroonOscillator>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.aroonoscillator
 */
function AroonOscillator(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "aroonoscillator",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Aroon Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/aroon.js`.
 *
 * Renders the `aroonoscillator` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <AroonOscillatorSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.aroonoscillator
 */
export function AroonOscillatorSeries(_props) {
    return null;
}
AroonOscillatorSeries.type = "Series";
AroonOscillator.Series = AroonOscillatorSeries;
AroonOscillatorSeries._HCReact = {
    type: "Series",
    HCOption: "series.aroonoscillator",
    childOption: "series.aroonoscillator",
};
AroonOscillator.type = "SeriesChart";
export default AroonOscillator;
