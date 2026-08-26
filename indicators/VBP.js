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
import "highcharts/es-modules/masters/indicators/volume-by-price.src.js";
/**
 * Volume By Price indicator.
 *
 * A ready-made chart with `chart.type` set to `vbp`. Declare the data with
 * `<VBP.Series>`, or use `VBPSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <VBP>
 *   <VBP.Series options={{ linkedTo: 'prices' }} />
 * </VBP>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.vbp
 */
function VBP(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vbp",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Volume By Price indicator.
 *
 * Renders the `vbp` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <VBPSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.vbp
 */
export function VBPSeries(_props) {
    return null;
}
VBPSeries.type = "Series";
VBP.Series = VBPSeries;
VBPSeries._HCReact = {
    type: "Series",
    HCOption: "series.vbp",
    childOption: "series.vbp",
};
VBP.type = "SeriesChart";
export default VBP;
