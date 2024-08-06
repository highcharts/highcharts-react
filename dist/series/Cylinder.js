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
import SeriesMod from "highcharts/es-modules/Series/Cylinder/CylinderSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Cylinder series
 */
var Cylinder = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "cylinder",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Cylinder.Series = function (_props) { return React.createElement(React.Fragment, null); };
Cylinder.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Cylinder.Series.defaultProps = {
    type: "cylinder",
};
Cylinder.type = "SeriesChart";
export default Cylinder;
//# sourceMappingURL=Cylinder.js.map