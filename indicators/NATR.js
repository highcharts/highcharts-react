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
import SeriesMod from "highcharts/esm/indicators/natr.src.js";
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
 * NATR series
 */
const NATR = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "natr",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function NATRSeries(_props) {
    return null;
}
NATRSeries.type = "Series";
NATR.Series = NATRSeries;
NATRSeries._HCReact = {
    type: "Series",
    HCOption: "series.natr",
    childOption: "series.natr",
};
NATR.type = "SeriesChart";
export default NATR;
//# sourceMappingURL=NATR.js.map