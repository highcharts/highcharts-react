/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-06
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/WMA/WMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Wma series
 */
var Wma = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "wma",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Wma.Series = function (_props) { return React.createElement(React.Fragment, null); };
Wma.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Wma.Series.defaultProps = {
    type: "wma",
};
Wma.type = "SeriesChart";
export default Wma;
//# sourceMappingURL=Wma.js.map