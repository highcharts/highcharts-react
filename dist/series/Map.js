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
import SeriesMod from "highcharts/es-modules/Series/Map/MapSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Map series
 */
var Map = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "map",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
Map.Series = function (_props) { return React.createElement(React.Fragment, null); };
Map.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Map.Series.defaultProps = {
    type: "map",
};
Map.type = "SeriesChart";
export default Map;
//# sourceMappingURL=Map.js.map