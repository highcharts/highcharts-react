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
BarSeries.type = "Series";
Bar.Series = BarSeries;
BarSeries._HCReact = {
    type: "Series",
    HCOption: "series.bar",
    childOption: "series.bar",
};
Bar.type = "SeriesChart";
export default Bar;
//# sourceMappingURL=Bar.js.map