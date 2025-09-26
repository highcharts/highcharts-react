/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/indicators/momentum.src.js";
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
 * Momentum series
 */
const Momentum = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "momentum",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function MomentumSeries(_props) {
    return null;
}
MomentumSeries.type = "Series";
Momentum.Series = MomentumSeries;
MomentumSeries._HCReact = {
    type: "Series",
    HC_Option: "series.momentum",
    childOption: "series.momentum",
};
Momentum.type = "SeriesChart";
export default Momentum;
//# sourceMappingURL=Momentum.js.map