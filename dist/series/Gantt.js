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
import SeriesMod from "highcharts/es-modules/Series/Gantt/GanttSeriesDefaults.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Gantt series
 */
var Gantt = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "gantt",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "ganttChart", options: chartConfig }, props.children));
};
Gantt.Series = function (_props) { return React.createElement(React.Fragment, null); };
Gantt.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Gantt.Series.defaultProps = {
    type: "gantt",
};
Gantt.type = "SeriesChart";
export default Gantt;
//# sourceMappingURL=Gantt.js.map