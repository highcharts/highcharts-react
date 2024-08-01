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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DEMA/DEMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Dema series
 */
var Dema = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "dema",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Dema.Series = function (_props) { return React.createElement(React.Fragment, null); };
Dema.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Dema.Series.defaultProps = {
    type: "dema",
};
Dema.type = "SeriesChart";
export default Dema;
//# sourceMappingURL=Dema.js.map