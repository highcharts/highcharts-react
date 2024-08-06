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
import SeriesMod from "highcharts/es-modules/Series/Networkgraph/NetworkgraphSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Networkgraph series
 */
var Networkgraph = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "networkgraph",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Networkgraph.Series = function (_props) { return React.createElement(React.Fragment, null); };
Networkgraph.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Networkgraph.Series.defaultProps = {
    type: "networkgraph",
};
Networkgraph.type = "SeriesChart";
export default Networkgraph;
//# sourceMappingURL=Networkgraph.js.map