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
import SeriesMod from "highcharts/es-modules/Series/Timeline/TimelineSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Timeline series
 */
var Timeline = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "timeline",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "chart", options: chartConfig }, props.children));
};
Timeline.Series = function (_props) { return React.createElement(React.Fragment, null); };
Timeline.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Timeline.Series.defaultProps = {
    type: "timeline",
};
Timeline.type = "SeriesChart";
export default Timeline;
//# sourceMappingURL=Timeline.js.map