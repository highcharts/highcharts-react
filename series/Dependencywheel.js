/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/dependency-wheel.src.js";
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
 * DependencyWheel series
 */
const DependencyWheel = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dependencywheel",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function DependencyWheelSeries(_props) {
    return null;
}
DependencyWheelSeries.type = "Series";
DependencyWheel.Series = DependencyWheelSeries;
DependencyWheelSeries._HCReact = {
    type: "Series",
    HC_Option: "series.dependencywheel",
    childOption: "series.dependencywheel",
};
DependencyWheel.type = "SeriesChart";
export default DependencyWheel;
//# sourceMappingURL=DependencyWheel.js.map