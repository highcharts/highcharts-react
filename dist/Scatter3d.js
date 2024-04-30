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
import Mod from "highcharts/es-modules/Series/Scatter3D/Scatter3DSeries.js";
Mod(HighchartsNS);
/**
 * Scatter3d series
 */
var Scatter3d = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "scatter3d",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Scatter3d.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Scatter3d.Series.defaultProps = {
    type: "scatter3d",
};
export default Scatter3d;
//# sourceMappingURL=Scatter3d.js.map