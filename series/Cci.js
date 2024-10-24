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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/CCI/CCIIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function CciSeries(_props) {
    return null;
}
CciSeries.type = "Series";
Cci.Series = CciSeries;
// TODO: Fix typings
// @ts-ignore:
CciSeries.defaultProps = {
    type: "cci",
};
Cci.type = "SeriesChart";
export default Cci;
//# sourceMappingURL=Cci.js.map