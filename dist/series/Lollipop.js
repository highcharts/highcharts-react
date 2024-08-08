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
import SeriesMod from "highcharts/es-modules/Series/Lollipop/LollipopSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Lollipop series
 */
var Lollipop = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "lollipop",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Lollipop.Series = function (_props) { return React.createElement(React.Fragment, null); };
Lollipop.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Lollipop.Series.defaultProps = {
    type: "lollipop",
};
Lollipop.type = "SeriesChart";
export default Lollipop;
//# sourceMappingURL=Lollipop.js.map