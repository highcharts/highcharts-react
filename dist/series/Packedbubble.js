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
import SeriesMod from "highcharts/es-modules/Series/PackedBubble/PackedBubbleSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Packedbubble series
 */
var Packedbubble = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "packedbubble",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Packedbubble.Series = function (_props) { return React.createElement(React.Fragment, null); };
Packedbubble.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Packedbubble.Series.defaultProps = {
    type: "packedbubble",
};
Packedbubble.type = "SeriesChart";
export default Packedbubble;
//# sourceMappingURL=Packedbubble.js.map