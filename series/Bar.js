/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Bar series
 */
const Bar = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bar",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function BarSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
BarSeries.type = "Series";
Bar.Series = BarSeries;
BarSeries._HCReact = {
    type: "Series",
    HC_Option: "series.bar",
    childOption: "series.bar",
};
Bar.type = "SeriesChart";
export default Bar;
//# sourceMappingURL=Bar.js.map