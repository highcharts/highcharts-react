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
import SeriesMod from "highcharts/esm/modules/disparityindex.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Disparityindex series
 */
const Disparityindex = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "disparityindex",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DisparityindexSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
DisparityindexSeries.type = "Series";
Disparityindex.Series = DisparityindexSeries;
DisparityindexSeries._HCReact = {
    type: "Series",
    HC_Option: "series.disparityindex",
    childOption: "series.disparityindex",
};
Disparityindex.type = "SeriesChart";
export default Disparityindex;
//# sourceMappingURL=Disparityindex.js.map