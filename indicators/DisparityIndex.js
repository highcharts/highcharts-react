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
import SeriesMod from "highcharts/esm/indicators/disparity-index.src.js";
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
 * DisparityIndex series
 */
const DisparityIndex = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "disparityindex",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DisparityIndexSeries(_props) {
    return null;
}
DisparityIndexSeries.type = "Series";
DisparityIndex.Series = DisparityIndexSeries;
DisparityIndexSeries._HCReact = {
    type: "Series",
    HC_Option: "series.disparityindex",
    childOption: "series.disparityindex",
};
DisparityIndex.type = "SeriesChart";
export default DisparityIndex;
//# sourceMappingURL=DisparityIndex.js.map