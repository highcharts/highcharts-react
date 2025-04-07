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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/OBV/OBVIndicator.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Obv series
 */
const Obv = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "obv",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ObvSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ObvSeries.type = "Series";
Obv.Series = ObvSeries;
ObvSeries._HCReact = {
    type: "Series",
    HC_Option: "series.obv",
    childOption: "series.obv",
};
Obv.type = "SeriesChart";
export default Obv;
//# sourceMappingURL=Obv.js.map