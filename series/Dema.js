/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DEMA/DEMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DemaSeries(_props) {
    return null;
}
DemaSeries.type = "Series";
Dema.Series = DemaSeries;
// TODO: Fix typings
// @ts-ignore:
DemaSeries.defaultProps = {
    type: "dema",
};
Dema.type = "SeriesChart";
export default Dema;
//# sourceMappingURL=Dema.js.map