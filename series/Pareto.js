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
import SeriesMod from "highcharts/es-modules/Series/ParetoSeries/ParetoSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Pareto series
 */
const Pareto = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pareto",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ParetoSeries(_props) {
    return null;
}
ParetoSeries.type = "Series";
Pareto.Series = ParetoSeries;
// TODO: Fix typings
// @ts-ignore:
ParetoSeries.defaultProps = {
    type: "pareto",
};
Pareto.type = "SeriesChart";
export default Pareto;
//# sourceMappingURL=Pareto.js.map