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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DisparityIndex/DisparityIndexIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Disparityindex series
 */
const Disparityindex = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "disparityindex",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DisparityindexSeries(_props) {
    return null;
}
DisparityindexSeries.type = "Series";
Disparityindex.Series = DisparityindexSeries;
// TODO: Fix typings
// @ts-ignore:
DisparityindexSeries.defaultProps = {
    type: "disparityindex",
};
Disparityindex.type = "SeriesChart";
export default Disparityindex;
//# sourceMappingURL=Disparityindex.js.map