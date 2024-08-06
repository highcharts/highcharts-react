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
import SeriesMod from "highcharts/es-modules/Series/SolidGauge/SolidGaugeSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Solidgauge series
 */
var Solidgauge = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "solidgauge",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Solidgauge.Series = function (_props) { return React.createElement(React.Fragment, null); };
Solidgauge.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Solidgauge.Series.defaultProps = {
    type: "solidgauge",
};
Solidgauge.type = "SeriesChart";
export default Solidgauge;
//# sourceMappingURL=Solidgauge.js.map