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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/PC/PCIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Pc series
 */
var Pc = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "pc",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Pc.Series = function (_props) { return React.createElement(React.Fragment, null); };
Pc.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Pc.Series.defaultProps = {
    type: "pc",
};
Pc.type = "SeriesChart";
export default Pc;
//# sourceMappingURL=Pc.js.map