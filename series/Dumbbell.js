/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-12
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/dumbbell.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Dumbbell series
 */
const Dumbbell = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dumbbell",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function DumbbellSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
DumbbellSeries.type = "Series";
Dumbbell.Series = DumbbellSeries;
DumbbellSeries._HCReact = {
    type: "Series",
    HC_Option: "series.dumbbell",
    childOption: "series.dumbbell",
};
Dumbbell.type = "SeriesChart";
export default Dumbbell;
//# sourceMappingURL=Dumbbell.js.map