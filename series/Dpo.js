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
import SeriesMod from "highcharts/esm/modules/dpo.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Dpo series
 */
const Dpo = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dpo",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DpoSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
DpoSeries.type = "Series";
Dpo.Series = DpoSeries;
DpoSeries._HCReact = {
    type: "Series",
    HC_Option: "series.dpo",
    childOption: "series.dpo",
};
Dpo.type = "SeriesChart";
export default Dpo;
//# sourceMappingURL=Dpo.js.map