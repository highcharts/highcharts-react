/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Organization/OrganizationSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Organization series
 */
const Organization = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "organization",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function OrganizationSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
OrganizationSeries.type = "Series";
Organization.Series = OrganizationSeries;
OrganizationSeries._HCReact = {
    type: "Series",
    HC_Option: "series.organization",
    childOption: "series.organization",
};
// TODO: Fix typings
// @ts-ignore:
OrganizationSeries.defaultProps = {
    type: "organization",
};
Organization.type = "SeriesChart";
export default Organization;
//# sourceMappingURL=Organization.js.map