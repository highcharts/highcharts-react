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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/LinearRegression/LinearRegressionIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Linearregression series
 */
var Linearregression = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "linearregression",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Linearregression.Series = function (_props) { return React.createElement(React.Fragment, null); };
Linearregression.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Linearregression.Series.defaultProps = {
    type: "linearregression",
};
Linearregression.type = "SeriesChart";
export default Linearregression;
//# sourceMappingURL=Linearregression.js.map