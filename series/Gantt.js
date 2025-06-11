/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/gantt.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "ganttChart", options: chartConfig }, props.children));
};
export function GanttSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
GanttSeries.type = "Series";
Gantt.Series = GanttSeries;
GanttSeries._HCReact = {
    type: "Series",
    HC_Option: "series.gantt",
    childOption: "series.gantt",
};
Gantt.type = "SeriesChart";
export default Gantt;
//# sourceMappingURL=Gantt.js.map