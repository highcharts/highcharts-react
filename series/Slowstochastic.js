/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/slowstochastic.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Slowstochastic.type = "SeriesChart";
export default Slowstochastic;
//# sourceMappingURL=Slowstochastic.js.map