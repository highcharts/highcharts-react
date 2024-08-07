/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/AreaRange/AreaRangeSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Arearange series
 */
var Arearange = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "arearange",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Arearange.Series = function (_props) { return React.createElement(React.Fragment, null); };
Arearange.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Arearange.Series.defaultProps = {
    type: "arearange",
};
Arearange.type = "SeriesChart";
export default Arearange;
//# sourceMappingURL=Arearange.js.map