/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionAngle/LinearRegressionAngleIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearregressionangleSeries(_props) {
    return null;
}
LinearregressionangleSeries.type = "Series";
Linearregressionangle.Series = LinearregressionangleSeries;
// TODO: Fix typings
// @ts-ignore:
LinearregressionangleSeries.defaultProps = {
    type: "linearregressionangle",
};
Linearregressionangle.type = "SeriesChart";
export default Linearregressionangle;
//# sourceMappingURL=Linearregressionangle.js.map