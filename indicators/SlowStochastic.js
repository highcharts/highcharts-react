/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/indicators/slow-stochastic.src.js";
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
 * SlowStochastic series
 */
const SlowStochastic = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "slowstochastic",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function SlowStochasticSeries(_props) {
    return null;
}
SlowStochasticSeries.type = "Series";
SlowStochastic.Series = SlowStochasticSeries;
SlowStochasticSeries._HCReact = {
    type: "Series",
    HC_Option: "series.slowstochastic",
    childOption: "series.slowstochastic",
};
SlowStochastic.type = "SeriesChart";
export default SlowStochastic;
//# sourceMappingURL=SlowStochastic.js.map