/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-01
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/RSI/RSIIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Rsi series
 */
var Rsi = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "rsi",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Rsi.Series = function (_props) { return React.createElement(React.Fragment, null); };
Rsi.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Rsi.Series.defaultProps = {
    type: "rsi",
};
Rsi.type = "SeriesChart";
export default Rsi;
//# sourceMappingURL=Rsi.js.map