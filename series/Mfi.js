/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/MFI/MFIIndicator.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Mfi series
 */
const Mfi = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mfi",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function MfiSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
MfiSeries.type = "Series";
Mfi.Series = MfiSeries;
MfiSeries._HCReact = {
    type: "Series",
    HC_Option: "series.mfi",
    childOption: "series.mfi",
};
Mfi.type = "SeriesChart";
export default Mfi;
//# sourceMappingURL=Mfi.js.map