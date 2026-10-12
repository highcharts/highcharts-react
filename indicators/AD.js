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
import "../seriesModules/AD.js";
/**
 * Accumulation Distribution (AD). This series requires `linkedTo` option to be
 * set.
 *
 * A ready-made chart with `chart.type` set to `ad`. Declare the data with
 * `<AD.Series>`, or use `ADSeries` inside a plain `<StockChart>` to combine it
 * with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import AD from '@highcharts/react/indicators/AD';
 *
 * <AD>
 *   <AD.Series options={{ linkedTo: 'prices' }} />
 * </AD>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.ad
 */
function AD(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ad",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Accumulation Distribution (AD). This series requires `linkedTo` option to be
 * set.
 *
 * Renders the `ad` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * import { StockChart } from '@highcharts/react/Stock';
 * import { ADSeries } from '@highcharts/react/indicators/AD';
 *
 * <StockChart>
 *   <ADSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.ad
 */
export function ADSeries(_props) {
    return null;
}
ADSeries.type = "Series";
AD.Series = ADSeries;
ADSeries._HCReact = {
    type: "Series",
    HCOption: "series.ad",
    childOption: "series.ad",
};
AD.type = "SeriesChart";
export default AD;
