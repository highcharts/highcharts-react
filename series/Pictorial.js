/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/pictorial.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Pictorial series
 */
const Pictorial = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pictorial",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PictorialSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PictorialSeries.type = "Series";
Pictorial.Series = PictorialSeries;
PictorialSeries._HCReact = {
    type: "Series",
    HC_Option: "series.pictorial",
    childOption: "series.pictorial",
};
Pictorial.type = "SeriesChart";
export default Pictorial;
//# sourceMappingURL=Pictorial.js.map