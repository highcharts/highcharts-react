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
import SeriesMod from "highcharts/esm/modules/columnrange.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Columnrange series
 */
const Columnrange = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "columnrange",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ColumnrangeSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ColumnrangeSeries.type = "Series";
Columnrange.Series = ColumnrangeSeries;
ColumnrangeSeries._HCReact = {
    type: "Series",
    HC_Option: "series.columnrange",
    childOption: "series.columnrange",
};
Columnrange.type = "SeriesChart";
export default Columnrange;
//# sourceMappingURL=Columnrange.js.map