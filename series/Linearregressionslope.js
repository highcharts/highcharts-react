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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionSlopes/LinearRegressionSlopesIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Linearregressionslope series
 */
const Linearregressionslope = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregressionslope",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearregressionslopeSeries(_props) {
    return null;
}
LinearregressionslopeSeries.type = "Series";
Linearregressionslope.Series = LinearregressionslopeSeries;
// TODO: Fix typings
// @ts-ignore:
LinearregressionslopeSeries.defaultProps = {
    type: "linearregressionslope",
};
Linearregressionslope.type = "SeriesChart";
export default Linearregressionslope;
//# sourceMappingURL=Linearregressionslope.js.map