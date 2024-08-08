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
import SeriesMod from "highcharts/es-modules/Series/ParetoSeries/ParetoSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Pareto series
 */
var Pareto = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "pareto",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Pareto.Series = function (_props) { return React.createElement(React.Fragment, null); };
Pareto.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Pareto.Series.defaultProps = {
    type: "pareto",
};
Pareto.type = "SeriesChart";
export default Pareto;
//# sourceMappingURL=Pareto.js.map