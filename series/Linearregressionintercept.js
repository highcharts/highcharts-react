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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionIntercept/LinearRegressionInterceptIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Linearregressionintercept series
 */
const Linearregressionintercept = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregressionintercept",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearregressioninterceptSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
LinearregressioninterceptSeries.type = "Series";
Linearregressionintercept.Series = LinearregressioninterceptSeries;
LinearregressioninterceptSeries._HCReact = {
    type: "Series",
    HC_Option: "series.linearregressionintercept",
    childOption: "series.linearregressionintercept",
};
// TODO: Fix typings
// @ts-ignore:
LinearregressioninterceptSeries.defaultProps = {
    type: "linearregressionintercept",
};
Linearregressionintercept.type = "SeriesChart";
export default Linearregressionintercept;
//# sourceMappingURL=Linearregressionintercept.js.map