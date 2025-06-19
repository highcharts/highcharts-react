/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/stochastic.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function StochasticSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
StochasticSeries.type = "Series";
Stochastic.Series = StochasticSeries;
StochasticSeries._HCReact = {
    type: "Series",
    HC_Option: "series.stochastic",
    childOption: "series.stochastic",
};
Stochastic.type = "SeriesChart";
export default Stochastic;
//# sourceMappingURL=Stochastic.js.map