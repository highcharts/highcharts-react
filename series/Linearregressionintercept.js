/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionIntercept/LinearRegressionInterceptIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Linearregressionintercept.Series = (_props) => React.createElement(React.Fragment, null);
Linearregressionintercept.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Linearregressionintercept.Series.defaultProps = {
    type: "linearregressionintercept",
};
Linearregressionintercept.type = "SeriesChart";
export default Linearregressionintercept;
//# sourceMappingURL=Linearregressionintercept.js.map