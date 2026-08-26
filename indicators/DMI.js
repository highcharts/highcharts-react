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
import "highcharts/es-modules/masters/indicators/dmi.src.js";
/**
 * Directional Movement Index (DMI). This series requires the `linkedTo` option
 * to be set and should be loaded after the `stock/indicators/indicators.js`
 * file.
 *
 * A ready-made chart with `chart.type` set to `dmi`. Declare the data with
 * `<DMI.Series>`, or use `DMISeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <DMI>
 *   <DMI.Series options={{ linkedTo: 'prices' }} />
 * </DMI>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.dmi
 */
function DMI(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dmi",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "stockChart", options: chartConfig }, props.children));
}
/**
 * Directional Movement Index (DMI). This series requires the `linkedTo` option
 * to be set and should be loaded after the `stock/indicators/indicators.js`
 * file.
 *
 * Renders the `dmi` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <DMISeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.dmi
 */
export function DMISeries(_props) {
    return null;
}
DMISeries.type = "Series";
DMI.Series = DMISeries;
DMISeries._HCReact = {
    type: "Series",
    HCOption: "series.dmi",
    childOption: "series.dmi",
};
DMI.type = "SeriesChart";
export default DMI;
