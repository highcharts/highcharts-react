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
import "highcharts/es-modules/masters/modules/venn.src.js";
/**
 * A Venn diagram displays all possible logical relations between a collection
 * of different sets. The sets are represented by circles, and the relation
 * between the sets are displayed by the overlap or lack of overlap between
 * them. The venn diagram is a special case of Euler diagrams, which can also
 * be displayed by this series type.
 *
 * A ready-made chart with `chart.type` set to `venn`. Declare the data with
 * `<Venn.Series>`, or use `VennSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Venn>
 *   <Venn.Series data={[1, 2, 3]} />
 * </Venn>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.venn
 */
function Venn(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "venn",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * A Venn diagram displays all possible logical relations between a collection
 * of different sets. The sets are represented by circles, and the relation
 * between the sets are displayed by the overlap or lack of overlap between
 * them. The venn diagram is a special case of Euler diagrams, which can also
 * be displayed by this series type.
 *
 * Renders the `venn` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <VennSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.venn
 */
export function VennSeries(_props) {
    return null;
}
VennSeries.type = "Series";
Venn.Series = VennSeries;
VennSeries._HCReact = {
    type: "Series",
    HCOption: "series.venn",
    childOption: "series.venn",
};
Venn.type = "SeriesChart";
export default Venn;
