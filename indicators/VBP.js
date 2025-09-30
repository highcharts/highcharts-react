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
import SeriesMod from "highcharts/esm/indicators/volume-by-price.src.js";
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
 * VBP series
 */
const VBP = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vbp",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function VBPSeries(_props) {
    return null;
}
VBPSeries.type = "Series";
VBP.Series = VBPSeries;
VBPSeries._HCReact = {
    type: "Series",
    HC_Option: "series.vbp",
    childOption: "series.vbp",
};
VBP.type = "SeriesChart";
export default VBP;
//# sourceMappingURL=VBP.js.map