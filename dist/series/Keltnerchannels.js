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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Keltnerchannels series
 */
var Keltnerchannels = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "keltnerchannels",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Keltnerchannels.Series = function (_props) { return React.createElement(React.Fragment, null); };
Keltnerchannels.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Keltnerchannels.Series.defaultProps = {
    type: "keltnerchannels",
};
Keltnerchannels.type = "SeriesChart";
export default Keltnerchannels;
//# sourceMappingURL=Keltnerchannels.js.map