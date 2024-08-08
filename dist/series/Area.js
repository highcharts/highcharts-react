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
import SeriesMod from "highcharts/es-modules/Series/Area/AreaSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Area series
 */
var Area = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "area",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Area.Series = function (_props) { return React.createElement(React.Fragment, null); };
Area.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Area.Series.defaultProps = {
    type: "area",
};
Area.type = "SeriesChart";
export default Area;
//# sourceMappingURL=Area.js.map