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
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/ColumnRange/ColumnRangeSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
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