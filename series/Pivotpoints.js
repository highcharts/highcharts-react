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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/PivotPoints/PivotPointsIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Pivotpoints series
 */
const Pivotpoints = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pivotpoints",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PivotpointsSeries(_props) {
    return null;
}
PivotpointsSeries.type = "Series";
Pivotpoints.Series = PivotpointsSeries;
// TODO: Fix typings
// @ts-ignore:
PivotpointsSeries.defaultProps = {
    type: "pivotpoints",
};
Pivotpoints.type = "SeriesChart";
export default Pivotpoints;
//# sourceMappingURL=Pivotpoints.js.map