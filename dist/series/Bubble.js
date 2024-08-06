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
import SeriesMod from "highcharts/es-modules/Series/Bubble/BubbleSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Bubble series
 */
var Bubble = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "bubble",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Bubble.Series = function (_props) { return React.createElement(React.Fragment, null); };
Bubble.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Bubble.Series.defaultProps = {
    type: "bubble",
};
Bubble.type = "SeriesChart";
export default Bubble;
//# sourceMappingURL=Bubble.js.map