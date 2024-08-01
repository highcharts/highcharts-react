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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/AO/AOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Ao series
 */
var Ao = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "ao",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Ao.Series = function (_props) { return React.createElement(React.Fragment, null); };
Ao.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Ao.Series.defaultProps = {
    type: "ao",
};
Ao.type = "SeriesChart";
export default Ao;
//# sourceMappingURL=Ao.js.map