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
import SeriesMod from "highcharts/es-modules/Series/Streamgraph/StreamgraphSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Streamgraph series
 */
var Streamgraph = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "streamgraph",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Streamgraph.Series = function (_props) { return React.createElement(React.Fragment, null); };
Streamgraph.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Streamgraph.Series.defaultProps = {
    type: "streamgraph",
};
Streamgraph.type = "SeriesChart";
export default Streamgraph;
//# sourceMappingURL=Streamgraph.js.map