/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
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
PieSeries.type = "Series";
Pie.Series = PieSeries;
PieSeries._HCReact = {
    type: "Series",
    HCOption: "series.pie",
    childOption: "series.pie",
};
Pie.type = "SeriesChart";
export default Pie;
//# sourceMappingURL=Pie.js.map