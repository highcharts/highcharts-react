/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DisparityIndex/DisparityIndexIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Disparityindex series
 */
var Disparityindex = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "disparityindex",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Disparityindex.Series = function (_props) { return React.createElement(React.Fragment, null); };
Disparityindex.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Disparityindex.Series.defaultProps = {
    type: "disparityindex",
};
Disparityindex.type = "SeriesChart";
export default Disparityindex;
//# sourceMappingURL=Disparityindex.js.map