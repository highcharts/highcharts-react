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
import "highcharts/es-modules/masters/modules/item-series.src.js";
/**
 * An item chart is an infographic chart where a number of items are laid out
 * in either a rectangular or circular pattern. It can be used to visualize
 * counts within a group, or for the circular pattern, typically a parliament.
 *
 * A ready-made chart with `chart.type` set to `item`. Declare the data with
 * `<Item.Series>`, or use `ItemSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Item>
 *   <Item.Series data={[1, 2, 3]} />
 * </Item>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.item
 */
function Item(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "item",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * An item chart is an infographic chart where a number of items are laid out
 * in either a rectangular or circular pattern. It can be used to visualize
 * counts within a group, or for the circular pattern, typically a parliament.
 *
 * Renders the `item` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <ItemSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.item
 */
export function ItemSeries(_props) {
    return null;
}
ItemSeries.type = "Series";
Item.Series = ItemSeries;
ItemSeries._HCReact = {
    type: "Series",
    HCOption: "series.item",
    childOption: "series.item",
};
Item.type = "SeriesChart";
export default Item;
