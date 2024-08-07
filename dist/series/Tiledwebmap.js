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
import SeriesMod from "highcharts/es-modules/Series/TiledWebMap/TiledWebMapSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Tiledwebmap series
 */
var Tiledwebmap = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "tiledwebmap",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
Tiledwebmap.Series = function (_props) { return React.createElement(React.Fragment, null); };
Tiledwebmap.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Tiledwebmap.Series.defaultProps = {
    type: "tiledwebmap",
};
Tiledwebmap.type = "SeriesChart";
export default Tiledwebmap;
//# sourceMappingURL=Tiledwebmap.js.map