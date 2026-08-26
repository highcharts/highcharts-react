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
/**
 * An HLC chart is a style of financial chart used to describe price movements
 * over time. It displays high, low and close values per data point.
 *
 * A ready-made chart with `chart.type` set to `hlc`. Declare the data with
 * `<HLC.Series>`, or use `HLCSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <HLC>
 *   <HLC.Series data={[1, 2, 3]} />
 * </HLC>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.hlc
 */
function HLC(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "hlc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * An HLC chart is a style of financial chart used to describe price movements
 * over time. It displays high, low and close values per data point.
 *
 * Renders the `hlc` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <HLCSeries data={[1, 2, 3]} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.hlc
 */
export function HLCSeries(_props) {
    return null;
}
HLCSeries.type = "Series";
HLC.Series = HLCSeries;
HLCSeries._HCReact = {
    type: "Series",
    HCOption: "series.hlc",
    childOption: "series.hlc",
};
HLC.type = "SeriesChart";
export default HLC;
