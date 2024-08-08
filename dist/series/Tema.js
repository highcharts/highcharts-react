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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/TEMA/TEMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Tema series
 */
var Tema = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "tema",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Tema.Series = function (_props) { return React.createElement(React.Fragment, null); };
Tema.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Tema.Series.defaultProps = {
    type: "tema",
};
Tema.type = "SeriesChart";
export default Tema;
//# sourceMappingURL=Tema.js.map