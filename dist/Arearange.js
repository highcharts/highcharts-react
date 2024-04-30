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
import Mod from "highcharts/es-modules/Series/AreaRange/AreaRangeSeries.js";
Mod(HighchartsNS);
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
// TODO: Fix typings
// @ts-ignore:
Arearange.Series.defaultProps = {
    type: "arearange",
};
export default Arearange;
//# sourceMappingURL=Arearange.js.map