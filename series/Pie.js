/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Pie series
 */
const Pie = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pie",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PieSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PieSeries.type = "Series";
Pie.Series = PieSeries;
PieSeries._HCReact = {
    type: "Series",
    HC_Option: "series.pie",
    childOption: "series.pie",
};
Pie.type = "SeriesChart";
export default Pie;
//# sourceMappingURL=Pie.js.map