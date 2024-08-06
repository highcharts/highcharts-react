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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/CMF/CMFIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Cmf series
 */
var Cmf = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "cmf",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Cmf.Series = function (_props) { return React.createElement(React.Fragment, null); };
Cmf.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Cmf.Series.defaultProps = {
    type: "cmf",
};
Cmf.type = "SeriesChart";
export default Cmf;
//# sourceMappingURL=Cmf.js.map