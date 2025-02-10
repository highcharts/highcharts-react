/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/APO/APOIndicator.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Apo series
 */
const Apo = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "apo",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ApoSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ApoSeries.type = "Series";
Apo.Series = ApoSeries;
ApoSeries._HCReact = {
    type: "Series",
    HC_Option: "series.apo",
    childOption: "series.apo",
};
Apo.type = "SeriesChart";
export default Apo;
//# sourceMappingURL=Apo.js.map