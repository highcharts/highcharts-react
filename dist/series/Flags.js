/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-06
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Flags/FlagsSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Flags series
 */
var Flags = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "flags",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Flags.Series = function (_props) { return React.createElement(React.Fragment, null); };
Flags.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Flags.Series.defaultProps = {
    type: "flags",
};
Flags.type = "SeriesChart";
export default Flags;
//# sourceMappingURL=Flags.js.map