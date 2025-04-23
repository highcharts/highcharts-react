/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/linearregressionintercept.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Linearregressionintercept series
 */
const Linearregressionintercept = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregressionintercept",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearregressioninterceptSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
LinearregressioninterceptSeries.type = "Series";
Linearregressionintercept.Series = LinearregressioninterceptSeries;
LinearregressioninterceptSeries._HCReact = {
    type: "Series",
    HC_Option: "series.linearregressionintercept",
    childOption: "series.linearregressionintercept",
};
Linearregressionintercept.type = "SeriesChart";
export default Linearregressionintercept;
//# sourceMappingURL=Linearregressionintercept.js.map