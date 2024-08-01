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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/ATR/ATRIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Atr series
 */
var Atr = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "atr",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Atr.Series = function (_props) { return React.createElement(React.Fragment, null); };
Atr.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Atr.Series.defaultProps = {
    type: "atr",
};
Atr.type = "SeriesChart";
export default Atr;
//# sourceMappingURL=Atr.js.map