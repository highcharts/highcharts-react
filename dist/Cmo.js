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
import Mod from "highcharts/es-modules/Stock/Indicators/CMO/CMOIndicator.js";
Mod(HighchartsNS);
/**
 * Cmo series
 */
var Cmo = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "cmo",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Cmo.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Cmo.Series.defaultProps = {
    type: "cmo",
};
export default Cmo;
//# sourceMappingURL=Cmo.js.map