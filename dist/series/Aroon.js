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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Aroon/AroonIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Aroon series
 */
var Aroon = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "aroon",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Aroon.Series = function (_props) { return React.createElement(React.Fragment, null); };
Aroon.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Aroon.Series.defaultProps = {
    type: "aroon",
};
Aroon.type = "SeriesChart";
export default Aroon;
//# sourceMappingURL=Aroon.js.map