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
import "highcharts/es-modules/masters/modules/sankey.src.js";
import "highcharts/es-modules/masters/modules/organization.src.js";
/**
 * An organization chart is a diagram that shows the structure of an
 * organization and the relationships and relative ranks of its parts and
 * positions.
 *
 * A ready-made chart with `chart.type` set to `organization`. Declare the data
 * with `<Organization.Series>`, or use `OrganizationSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Organization>
 *   <Organization.Series data={[1, 2, 3]} />
 * </Organization>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.organization
 */
function Organization(props) {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "organization",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, subtitle: props.subtitle, caption: props.caption, credits: props.credits, type: props.type, height: props.height, width: props.width, inverted: props.inverted, animation: props.animation, styledMode: props.styledMode, backgroundColor: props.backgroundColor, borderColor: props.borderColor, borderWidth: props.borderWidth, margin: props.margin, spacing: props.spacing, colors: props.colors, dataTable: props.dataTable, chartConstructor: "chart", options: chartConfig }, props.children));
}
/**
 * An organization chart is a diagram that shows the structure of an
 * organization and the relationships and relative ranks of its parts and
 * positions.
 *
 * Renders the `organization` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <OrganizationSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.organization
 */
export function OrganizationSeries(_props) {
    return null;
}
OrganizationSeries.type = "Series";
Organization.Series = OrganizationSeries;
OrganizationSeries._HCReact = {
    type: "Series",
    HCOption: "series.organization",
    childOption: "series.organization",
};
Organization.type = "SeriesChart";
export default Organization;
