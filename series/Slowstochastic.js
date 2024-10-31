/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/SlowStochastic/SlowStochasticIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Slowstochastic series
 */
const Slowstochastic = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "slowstochastic",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function SlowstochasticSeries(_props) {
    return null;
}
SlowstochasticSeries.type = "Series";
Slowstochastic.Series = SlowstochasticSeries;
// TODO: Fix typings
// @ts-ignore:
SlowstochasticSeries.defaultProps = {
    type: "slowstochastic",
};
Slowstochastic.type = "SeriesChart";
export default Slowstochastic;
//# sourceMappingURL=Slowstochastic.js.map