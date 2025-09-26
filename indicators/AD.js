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
import SeriesMod from "highcharts/esm/indicators/accumulation-distribution.src.js";
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
 * AD series
 */
const AD = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ad",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ADSeries(_props) {
    return null;
}
ADSeries.type = "Series";
AD.Series = ADSeries;
ADSeries._HCReact = {
    type: "Series",
    HC_Option: "series.ad",
    childOption: "series.ad",
};
AD.type = "SeriesChart";
export default AD;
//# sourceMappingURL=AD.js.map