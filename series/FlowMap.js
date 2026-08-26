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
import "highcharts/es-modules/masters/modules/flowmap.src.js";
/**
 * A flowmap series is a series laid out on top of a map series allowing to
 * display route paths (e.g. flight or ship routes) or flows on a map. It
 * creates a link between two points on a map chart.
 *
 * A ready-made chart with `chart.type` set to `flowmap`. Declare the data with
 * `<FlowMap.Series>`, or use `FlowMapSeries` inside a plain `<MapsChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <FlowMap>
 *   <FlowMap.Series data={[1, 2, 3]} />
 * </FlowMap>
 *
 * @see https://api.highcharts.com/highmaps/plotOptions.flowmap
 */
function FlowMap(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "flowmap",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "mapChart", options: chartConfig }, props.children));
}
/**
 * A flowmap series is a series laid out on top of a map series allowing to
 * display route paths (e.g. flight or ship routes) or flows on a map. It
 * creates a link between two points on a map chart.
 *
 * Renders the `flowmap` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Maps.
 *
 * @example
 * <MapsChart>
 *   <FlowMapSeries data={[1, 2, 3]} />
 * </MapsChart>
 *
 * @see https://api.highcharts.com/highmaps/series.flowmap
 */
export function FlowMapSeries(_props) {
    return null;
}
FlowMapSeries.type = "Series";
FlowMap.Series = FlowMapSeries;
FlowMapSeries._HCReact = {
    type: "Series",
    HCOption: "series.flowmap",
    childOption: "series.flowmap",
};
FlowMap.type = "SeriesChart";
export default FlowMap;
