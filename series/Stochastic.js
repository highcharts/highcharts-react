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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Stochastic/StochasticIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Stochastic series
 */
const Stochastic = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "stochastic",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function StochasticSeries(_props) {
    return null;
}
StochasticSeries.type = "Series";
Stochastic.Series = StochasticSeries;
// TODO: Fix typings
// @ts-ignore:
StochasticSeries.defaultProps = {
    type: "stochastic",
};
Stochastic.type = "SeriesChart";
export default Stochastic;
//# sourceMappingURL=Stochastic.js.map