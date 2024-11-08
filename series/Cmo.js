/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/CMO/CMOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Cmo series
 */
const Cmo = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "cmo",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function CmoSeries(_props) {
    return null;
}
CmoSeries.type = "Series";
Cmo.Series = CmoSeries;
// TODO: Fix typings
// @ts-ignore:
CmoSeries.defaultProps = {
    type: "cmo",
};
Cmo.type = "SeriesChart";
export default Cmo;
//# sourceMappingURL=Cmo.js.map