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
import SeriesMod from "highcharts/esm/indicators/obv.src.js";
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
 * OBV series
 */
const OBV = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "obv",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function OBVSeries(_props) {
    return null;
}
OBVSeries.type = "Series";
OBV.Series = OBVSeries;
OBVSeries._HCReact = {
    type: "Series",
    HCOption: "series.obv",
    childOption: "series.obv",
};
OBV.type = "SeriesChart";
export default OBV;
//# sourceMappingURL=OBV.js.map