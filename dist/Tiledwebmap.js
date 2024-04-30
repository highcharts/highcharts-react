/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-04-30
 *
 */
import { useState, React,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "./Highcharts";
import Mod from "highcharts/es-modules/Series/TiledWebMap/TiledWebMapSeries.js";
Mod(HighchartsNS);
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
// TODO: Fix typings
// @ts-ignore:
Tiledwebmap.Series.defaultProps = {
    type: "tiledwebmap",
};
export default Tiledwebmap;
//# sourceMappingURL=Tiledwebmap.js.map