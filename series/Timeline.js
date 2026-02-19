/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/timeline.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    // Initialize series module
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
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
TimelineSeries._HCReact = {
    type: "Series",
    HCOption: "series.timeline",
    childOption: "series.timeline",
};
Timeline.type = "SeriesChart";
export default Timeline;
//# sourceMappingURL=Timeline.js.map