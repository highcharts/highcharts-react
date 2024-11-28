/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/SlowStochastic/SlowStochasticIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function SlowstochasticSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
SlowstochasticSeries.type = "Series";
Slowstochastic.Series = SlowstochasticSeries;
SlowstochasticSeries._HCReact = {
    type: "Series",
    HC_Option: "series.slowstochastic",
    childOption: "series.slowstochastic",
};
// TODO: Fix typings
// @ts-ignore:
SlowstochasticSeries.defaultProps = {
    type: "slowstochastic",
};
Slowstochastic.type = "SeriesChart";
export default Slowstochastic;
//# sourceMappingURL=Slowstochastic.js.map