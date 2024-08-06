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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/TRIX/TRIXIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Trix series
 */
var Trix = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "trix",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Trix.Series = function (_props) { return React.createElement(React.Fragment, null); };
Trix.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Trix.Series.defaultProps = {
    type: "trix",
};
Trix.type = "SeriesChart";
export default Trix;
//# sourceMappingURL=Trix.js.map