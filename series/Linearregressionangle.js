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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionAngle/LinearRegressionAngleIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Linearregressionangle series
 */
const Linearregressionangle = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregressionangle",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearregressionangleSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
LinearregressionangleSeries.type = "Series";
Linearregressionangle.Series = LinearregressionangleSeries;
LinearregressionangleSeries._HCReact = {
    type: "Series",
    HC_Option: "series.linearregressionangle",
    childOption: "series.linearregressionangle",
};
// TODO: Fix typings
// @ts-ignore:
LinearregressionangleSeries.defaultProps = {
    type: "linearregressionangle",
};
Linearregressionangle.type = "SeriesChart";
export default Linearregressionangle;
//# sourceMappingURL=Linearregressionangle.js.map