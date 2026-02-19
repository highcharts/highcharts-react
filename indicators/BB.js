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
import SeriesMod from "highcharts/esm/indicators/bollinger-bands.src.js";
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
 * BB series
 */
const BB = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bb",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function BBSeries(_props) {
    return null;
}
BBSeries.type = "Series";
BB.Series = BBSeries;
BBSeries._HCReact = {
    type: "Series",
    HCOption: "series.bb",
    childOption: "series.bb",
};
BB.type = "SeriesChart";
export default BB;
//# sourceMappingURL=BB.js.map