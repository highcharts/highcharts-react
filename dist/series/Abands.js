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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/ABands/ABandsIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Abands series
 */
var Abands = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "abands",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Abands.Series = function (_props) { return React.createElement(React.Fragment, null); };
Abands.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Abands.Series.defaultProps = {
    type: "abands",
};
Abands.type = "SeriesChart";
export default Abands;
//# sourceMappingURL=Abands.js.map