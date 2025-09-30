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
import SeriesMod from "highcharts/esm/modules/pareto.src.js";
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
ParetoSeries._HCReact = {
    type: "Series",
    HC_Option: "series.pareto",
    childOption: "series.pareto",
};
Pareto.type = "SeriesChart";
export default Pareto;
//# sourceMappingURL=Pareto.js.map