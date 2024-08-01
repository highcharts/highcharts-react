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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Aroonoscillator series
 */
var Aroonoscillator = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "aroonoscillator",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Aroonoscillator.Series = function (_props) { return React.createElement(React.Fragment, null); };
Aroonoscillator.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Aroonoscillator.Series.defaultProps = {
    type: "aroonoscillator",
};
Aroonoscillator.type = "SeriesChart";
export default Aroonoscillator;
//# sourceMappingURL=Aroonoscillator.js.map