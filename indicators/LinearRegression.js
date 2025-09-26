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
import SeriesMod from "highcharts/esm/indicators/regressions.src.js";
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
 * LinearRegression series
 */
const LinearRegression = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregression",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearRegressionSeries(_props) {
    return null;
}
LinearRegressionSeries.type = "Series";
LinearRegression.Series = LinearRegressionSeries;
LinearRegressionSeries._HCReact = {
    type: "Series",
    HC_Option: "series.linearregression",
    childOption: "series.linearregression",
};
LinearRegression.type = "SeriesChart";
export default LinearRegression;
//# sourceMappingURL=LinearRegression.js.map