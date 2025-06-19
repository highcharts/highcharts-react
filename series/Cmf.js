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
import SeriesMod from "highcharts/esm/modules/cmf.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Cmf series
 */
const Cmf = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "cmf",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function CmfSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
CmfSeries.type = "Series";
Cmf.Series = CmfSeries;
CmfSeries._HCReact = {
    type: "Series",
    HC_Option: "series.cmf",
    childOption: "series.cmf",
};
Cmf.type = "SeriesChart";
export default Cmf;
//# sourceMappingURL=Cmf.js.map