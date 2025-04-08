/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/dmi.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Dmi series
 */
const Dmi = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dmi",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DmiSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
DmiSeries.type = "Series";
Dmi.Series = DmiSeries;
DmiSeries._HCReact = {
    type: "Series",
    HC_Option: "series.dmi",
    childOption: "series.dmi",
};
Dmi.type = "SeriesChart";
export default Dmi;
//# sourceMappingURL=Dmi.js.map