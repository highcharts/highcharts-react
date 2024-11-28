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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DEMA/DEMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Dema series
 */
const Dema = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dema",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DemaSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
DemaSeries.type = "Series";
Dema.Series = DemaSeries;
DemaSeries._HCReact = {
    type: "Series",
    HC_Option: "series.dema",
    childOption: "series.dema",
};
// TODO: Fix typings
// @ts-ignore:
DemaSeries.defaultProps = {
    type: "dema",
};
Dema.type = "SeriesChart";
export default Dema;
//# sourceMappingURL=Dema.js.map