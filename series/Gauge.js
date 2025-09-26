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
import SeriesMod from "highcharts/esm/highcharts-more.src.js";
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
 * Gauge series
 */
const Gauge = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "gauge",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function GaugeSeries(_props) {
    return null;
}
GaugeSeries.type = "Series";
Gauge.Series = GaugeSeries;
GaugeSeries._HCReact = {
    type: "Series",
    HC_Option: "series.gauge",
    childOption: "series.gauge",
};
Gauge.type = "SeriesChart";
export default Gauge;
//# sourceMappingURL=Gauge.js.map