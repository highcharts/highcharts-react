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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Klinger/KlingerIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Klinger series
 */
var Klinger = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "klinger",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Klinger.Series = function (_props) { return React.createElement(React.Fragment, null); };
Klinger.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Klinger.Series.defaultProps = {
    type: "klinger",
};
Klinger.type = "SeriesChart";
export default Klinger;
//# sourceMappingURL=Klinger.js.map