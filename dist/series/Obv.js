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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/OBV/OBVIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Obv series
 */
var Obv = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "obv",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Obv.Series = function (_props) { return React.createElement(React.Fragment, null); };
Obv.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Obv.Series.defaultProps = {
    type: "obv",
};
Obv.type = "SeriesChart";
export default Obv;
//# sourceMappingURL=Obv.js.map