/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-04-30
 *
 */
import { useState, React,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "./Highcharts";
import Mod from "highcharts/es-modules/Series/Streamgraph/StreamgraphSeries.js";
Mod(HighchartsNS);
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
// TODO: Fix typings
// @ts-ignore:
Streamgraph.Series.defaultProps = {
    type: "streamgraph",
};
export default Streamgraph;
//# sourceMappingURL=Streamgraph.js.map