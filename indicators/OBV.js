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
import "highcharts/es-modules/masters/indicators/obv.src.js";
/**
 * On-Balance Volume (OBV) technical indicator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file. Through the `volumeSeriesID` there
 * also should be linked the volume series.
 *
 * A ready-made chart with `chart.type` set to `obv`. Declare the data with
 * `<OBV.Series>`, or use `OBVSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <OBV>
 *   <OBV.Series options={{ linkedTo: 'prices' }} />
 * </OBV>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.obv
 */
function OBV(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "obv",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * On-Balance Volume (OBV) technical indicator. This series requires the
 * `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file. Through the `volumeSeriesID` there
 * also should be linked the volume series.
 *
 * Renders the `obv` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <OBVSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.obv
 */
export function OBVSeries(_props) {
    return null;
}
OBVSeries.type = "Series";
OBV.Series = OBVSeries;
OBVSeries._HCReact = {
    type: "Series",
    HCOption: "series.obv",
    childOption: "series.obv",
};
OBV.type = "SeriesChart";
export default OBV;
