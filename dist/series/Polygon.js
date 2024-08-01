/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-01
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Polygon/PolygonSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Polygon series
 */
var Polygon = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "polygon",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Polygon.Series = function (_props) { return React.createElement(React.Fragment, null); };
Polygon.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Polygon.Series.defaultProps = {
    type: "polygon",
};
Polygon.type = "SeriesChart";
export default Polygon;
//# sourceMappingURL=Polygon.js.map