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
 * Stack series
 */
const Stack = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "stack",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function StackSeries(_props) {
    return null;
}
StackSeries.type = "Series";
Stack.Series = StackSeries;
StackSeries._HCReact = {
    type: "Series",
    HCOption: "series.stack",
    childOption: "series.stack",
};
Stack.type = "SeriesChart";
export default Stack;
//# sourceMappingURL=Stack.js.map