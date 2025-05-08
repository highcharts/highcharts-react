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
import SeriesMod from "highcharts/esm/modules/linearregressionslope.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Linearregressionslope series
 */
const Linearregressionslope = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "linearregressionslope",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function LinearregressionslopeSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
LinearregressionslopeSeries.type = "Series";
Linearregressionslope.Series = LinearregressionslopeSeries;
LinearregressionslopeSeries._HCReact = {
    type: "Series",
    HC_Option: "series.linearregressionslope",
    childOption: "series.linearregressionslope",
};
Linearregressionslope.type = "SeriesChart";
export default Linearregressionslope;
//# sourceMappingURL=Linearregressionslope.js.map