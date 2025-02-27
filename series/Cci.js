/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-27
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/CCI/CCIIndicator.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Cci series
 */
const Cci = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "cci",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function CciSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
CciSeries.type = "Series";
Cci.Series = CciSeries;
CciSeries._HCReact = {
    type: "Series",
    HC_Option: "series.cci",
    childOption: "series.cci",
};
Cci.type = "SeriesChart";
export default Cci;
//# sourceMappingURL=Cci.js.map