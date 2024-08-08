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
import SeriesMod from "highcharts/es-modules/Series/Scatter3D/Scatter3DSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
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
Scatter3d.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Scatter3d.Series.defaultProps = {
    type: "scatter3d",
};
Scatter3d.type = "SeriesChart";
export default Scatter3d;
//# sourceMappingURL=Scatter3d.js.map