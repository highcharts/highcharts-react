/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/linearregression.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Linearregression series
 */
const Linearregression = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregression",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearregressionSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
LinearregressionSeries.type = "Series";
Linearregression.Series = LinearregressionSeries;
LinearregressionSeries._HCReact = {
    type: "Series",
    HC_Option: "series.linearregression",
    childOption: "series.linearregression",
};
Linearregression.type = "SeriesChart";
export default Linearregression;
//# sourceMappingURL=Linearregression.js.map