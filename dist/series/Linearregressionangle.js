/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegressionAngle/LinearRegressionAngleIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Linearregressionangle series
 */
var Linearregressionangle = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "linearregressionangle",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Linearregressionangle.Series = function (_props) { return React.createElement(React.Fragment, null); };
Linearregressionangle.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Linearregressionangle.Series.defaultProps = {
    type: "linearregressionangle",
};
Linearregressionangle.type = "SeriesChart";
export default Linearregressionangle;
//# sourceMappingURL=Linearregressionangle.js.map