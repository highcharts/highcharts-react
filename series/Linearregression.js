/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegression/LinearRegressionIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Linearregression series
 */
const Linearregression = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregression",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearregressionSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
LinearregressionSeries.type = "Series";
Linearregression.Series = LinearregressionSeries;
LinearregressionSeries._HCReact = {
    type: "Series",
    HC_Option: "series.linearregression",
    childOption: "series.linearregression",
};
// TODO: Fix typings
// @ts-ignore:
LinearregressionSeries.defaultProps = {
    type: "linearregression",
};
Linearregression.type = "SeriesChart";
export default Linearregression;
//# sourceMappingURL=Linearregression.js.map