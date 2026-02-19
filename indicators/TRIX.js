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
import SeriesMod from "highcharts/esm/indicators/tema.src.js";
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
 * TRIX series
 */
const TRIX = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "trix",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function TRIXSeries(_props) {
    return null;
}
TRIXSeries.type = "Series";
TRIX.Series = TRIXSeries;
TRIXSeries._HCReact = {
    type: "Series",
    HCOption: "series.trix",
    childOption: "series.trix",
};
TRIX.type = "SeriesChart";
export default TRIX;
//# sourceMappingURL=TRIX.js.map