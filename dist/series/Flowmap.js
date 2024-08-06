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
import SeriesMod from "highcharts/es-modules/Series/FlowMap/FlowMapSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Flowmap series
 */
var Flowmap = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "flowmap",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
Flowmap.Series = function (_props) { return React.createElement(React.Fragment, null); };
Flowmap.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Flowmap.Series.defaultProps = {
    type: "flowmap",
};
Flowmap.type = "SeriesChart";
export default Flowmap;
//# sourceMappingURL=Flowmap.js.map