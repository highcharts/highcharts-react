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
import "highcharts/es-modules/masters/indicators/trendline.src.js";
/**
 * Trendline (linear regression) fits a straight line to the selected data
 * using a method called the Sum Of Least Squares. This series requires the
 * `linkedTo` option to be set.
 *
 * A ready-made chart with `chart.type` set to `trendline`. Declare the data
 * with `<TrendLine.Series>`, or use `TrendLineSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <TrendLine>
 *   <TrendLine.Series options={{ linkedTo: 'prices' }} />
 * </TrendLine>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.trendline
 */
function TrendLine(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "trendline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Trendline (linear regression) fits a straight line to the selected data
 * using a method called the Sum Of Least Squares. This series requires the
 * `linkedTo` option to be set.
 *
 * Renders the `trendline` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <TrendLineSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.trendline
 */
export function TrendLineSeries(_props) {
    return null;
}
TrendLineSeries.type = "Series";
TrendLine.Series = TrendLineSeries;
TrendLineSeries._HCReact = {
    type: "Series",
    HCOption: "series.trendline",
    childOption: "series.trendline",
};
TrendLine.type = "SeriesChart";
export default TrendLine;
