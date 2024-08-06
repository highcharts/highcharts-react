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
import SeriesMod from "highcharts/es-modules/Series/Treegraph/TreegraphSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Treegraph series
 */
var Treegraph = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "treegraph",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Treegraph.Series = function (_props) { return React.createElement(React.Fragment, null); };
Treegraph.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Treegraph.Series.defaultProps = {
    type: "treegraph",
};
Treegraph.type = "SeriesChart";
export default Treegraph;
//# sourceMappingURL=Treegraph.js.map