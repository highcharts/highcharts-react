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
import SeriesMod from "highcharts/es-modules/Series/MapLine/MapLineSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Mapline series
 */
var Mapline = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "mapline",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
Mapline.Series = function (_props) { return React.createElement(React.Fragment, null); };
Mapline.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Mapline.Series.defaultProps = {
    type: "mapline",
};
Mapline.type = "SeriesChart";
export default Mapline;
//# sourceMappingURL=Mapline.js.map