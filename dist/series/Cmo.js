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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/CMO/CMOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Cmo series
 */
var Cmo = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "cmo",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Cmo.Series = function (_props) { return React.createElement(React.Fragment, null); };
Cmo.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Cmo.Series.defaultProps = {
    type: "cmo",
};
Cmo.type = "SeriesChart";
export default Cmo;
//# sourceMappingURL=Cmo.js.map