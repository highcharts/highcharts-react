/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Timeline/TimelineSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Timeline series
 */
const Timeline = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "timeline",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function TimelineSeries(_props) {
    return null;
}
TimelineSeries.type = "Series";
Timeline.Series = TimelineSeries;
// TODO: Fix typings
// @ts-ignore:
TimelineSeries.defaultProps = {
    type: "timeline",
};
Timeline.type = "SeriesChart";
export default Timeline;
//# sourceMappingURL=Timeline.js.map