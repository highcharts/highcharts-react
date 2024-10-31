/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Gantt/GanttSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Gantt series
 */
const Gantt = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "gantt",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "ganttChart", options: chartConfig }, props.children));
};
export function GanttSeries(_props) {
    return null;
}
GanttSeries.type = "Series";
Gantt.Series = GanttSeries;
// TODO: Fix typings
// @ts-ignore:
GanttSeries.defaultProps = {
    type: "gantt",
};
Gantt.type = "SeriesChart";
export default Gantt;
//# sourceMappingURL=Gantt.js.map