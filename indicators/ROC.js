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
import SeriesMod from "highcharts/esm/indicators/roc.src.js";
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
 * ROC series
 */
const ROC = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "roc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ROCSeries(_props) {
    return null;
}
ROCSeries.type = "Series";
ROC.Series = ROCSeries;
ROCSeries._HCReact = {
    type: "Series",
    HC_Option: "series.roc",
    childOption: "series.roc",
};
ROC.type = "SeriesChart";
export default ROC;
//# sourceMappingURL=ROC.js.map