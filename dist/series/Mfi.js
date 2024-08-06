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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/MFI/MFIIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Mfi series
 */
var Mfi = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "mfi",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Mfi.Series = function (_props) { return React.createElement(React.Fragment, null); };
Mfi.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Mfi.Series.defaultProps = {
    type: "mfi",
};
Mfi.type = "SeriesChart";
export default Mfi;
//# sourceMappingURL=Mfi.js.map