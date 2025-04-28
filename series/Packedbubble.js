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
import SeriesMod from "highcharts/esm/modules/packedbubble.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Packedbubble series
 */
const Packedbubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "packedbubble",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function PackedbubbleSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PackedbubbleSeries.type = "Series";
Packedbubble.Series = PackedbubbleSeries;
PackedbubbleSeries._HCReact = {
    type: "Series",
    HC_Option: "series.packedbubble",
    childOption: "series.packedbubble",
};
Packedbubble.type = "SeriesChart";
export default Packedbubble;
//# sourceMappingURL=Packedbubble.js.map