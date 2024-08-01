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
 * MapData series
 */
var MapData = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "mapdata",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
MapData.Series = function (_props) { return React.createElement(React.Fragment, null); };
MapData.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
MapData.Series.defaultProps = {
    type: "mapdata",
};
MapData.type = "SeriesChart";
export default MapData;
//# sourceMappingURL=MapData.js.map