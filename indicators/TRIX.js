/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
import "../seriesModules/TRIX.js";
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
 * import TRIX from '@highcharts/react/indicators/TRIX';
 *
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
 * import { StockChart } from '@highcharts/react/Stock';
 * import { TRIXSeries } from '@highcharts/react/indicators/TRIX';
 *
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
