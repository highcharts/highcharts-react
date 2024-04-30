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
import Mod from "highcharts/es-modules/Series/Pictorial/PictorialSeries.js";
Mod(HighchartsNS);
/**
 * Pictorial series
 */
var Pictorial = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "pictorial",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Pictorial.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Pictorial.Series.defaultProps = {
    type: "pictorial",
};
export default Pictorial;
//# sourceMappingURL=Pictorial.js.map