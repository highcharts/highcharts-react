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
import SeriesMod from "highcharts/esm/modules/klinger.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Klinger series
 */
const Klinger = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "klinger",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function KlingerSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
KlingerSeries.type = "Series";
Klinger.Series = KlingerSeries;
KlingerSeries._HCReact = {
    type: "Series",
    HC_Option: "series.klinger",
    childOption: "series.klinger",
};
Klinger.type = "SeriesChart";
export default Klinger;
//# sourceMappingURL=Klinger.js.map