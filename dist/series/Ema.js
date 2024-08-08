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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/EMA/EMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Ema series
 */
var Ema = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "ema",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Ema.Series = function (_props) { return React.createElement(React.Fragment, null); };
Ema.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Ema.Series.defaultProps = {
    type: "ema",
};
Ema.type = "SeriesChart";
export default Ema;
//# sourceMappingURL=Ema.js.map