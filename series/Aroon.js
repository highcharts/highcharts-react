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
import SeriesMod from "highcharts/esm/modules/aroon.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Aroon series
 */
const Aroon = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "aroon",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function AroonSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
AroonSeries.type = "Series";
Aroon.Series = AroonSeries;
AroonSeries._HCReact = {
    type: "Series",
    HC_Option: "series.aroon",
    childOption: "series.aroon",
};
Aroon.type = "SeriesChart";
export default Aroon;
//# sourceMappingURL=Aroon.js.map