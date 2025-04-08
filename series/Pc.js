/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/pc.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Pc series
 */
const Pc = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pc",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PcSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PcSeries.type = "Series";
Pc.Series = PcSeries;
PcSeries._HCReact = {
    type: "Series",
    HC_Option: "series.pc",
    childOption: "series.pc",
};
Pc.type = "SeriesChart";
export default Pc;
//# sourceMappingURL=Pc.js.map