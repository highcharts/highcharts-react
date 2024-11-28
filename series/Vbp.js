/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/VBP/VBPIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Vbp series
 */
const Vbp = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "vbp",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function VbpSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
VbpSeries.type = "Series";
Vbp.Series = VbpSeries;
VbpSeries._HCReact = {
    type: "Series",
    HC_Option: "series.vbp",
    childOption: "series.vbp",
};
// TODO: Fix typings
// @ts-ignore:
VbpSeries.defaultProps = {
    type: "vbp",
};
Vbp.type = "SeriesChart";
export default Vbp;
//# sourceMappingURL=Vbp.js.map