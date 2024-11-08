/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Columnrange series
 */
const Columnrange = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "columnrange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ColumnrangeSeries(_props) {
    return null;
}
ColumnrangeSeries.type = "Series";
Columnrange.Series = ColumnrangeSeries;
// TODO: Fix typings
// @ts-ignore:
ColumnrangeSeries.defaultProps = {
    type: "columnrange",
};
Columnrange.type = "SeriesChart";
export default Columnrange;
//# sourceMappingURL=Columnrange.js.map