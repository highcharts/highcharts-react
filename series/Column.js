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
 * Column series
 */
const Column = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "column",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ColumnSeries(_props) {
    return null;
}
ColumnSeries.type = "Series";
Column.Series = ColumnSeries;
ColumnSeries._HCReact = {
    type: "Series",
    HCOption: "series.column",
    childOption: "series.column",
};
Column.type = "SeriesChart";
export default Column;
//# sourceMappingURL=Column.js.map