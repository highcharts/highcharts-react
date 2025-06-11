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
import SeriesMod from "highcharts/esm/modules/arcdiagram.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Arcdiagram series
 */
const Arcdiagram = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "arcdiagram",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ArcdiagramSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ArcdiagramSeries.type = "Series";
Arcdiagram.Series = ArcdiagramSeries;
ArcdiagramSeries._HCReact = {
    type: "Series",
    HC_Option: "series.arcdiagram",
    childOption: "series.arcdiagram",
};
Arcdiagram.type = "SeriesChart";
export default Arcdiagram;
//# sourceMappingURL=Arcdiagram.js.map