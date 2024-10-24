/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts } from "../Highcharts";
/**
 * Pie series
 */
const Pie = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pie",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PieSeries(_props) {
    return null;
}
PieSeries.type = "Series";
Pie.Series = PieSeries;
// TODO: Fix typings
// @ts-ignore:
PieSeries.defaultProps = {
    type: "pie",
};
Pie.type = "SeriesChart";
export default Pie;
//# sourceMappingURL=Pie.js.map