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
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/indicators/stochastic.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    // Initialize series module
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
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
StochasticSeries.type = "Series";
Stochastic.Series = StochasticSeries;
StochasticSeries._HCReact = {
    type: "Series",
    HCOption: "series.stochastic",
    childOption: "series.stochastic",
};
Stochastic.type = "SeriesChart";
export default Stochastic;
//# sourceMappingURL=Stochastic.js.map