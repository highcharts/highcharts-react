/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/dependencywheel.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Dependencywheel series
 */
const Dependencywheel = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dependencywheel",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function DependencywheelSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
DependencywheelSeries.type = "Series";
Dependencywheel.Series = DependencywheelSeries;
DependencywheelSeries._HCReact = {
    type: "Series",
    HC_Option: "series.dependencywheel",
    childOption: "series.dependencywheel",
};
Dependencywheel.type = "SeriesChart";
export default Dependencywheel;
//# sourceMappingURL=Dependencywheel.js.map