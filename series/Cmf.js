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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/CMF/CMFIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Cmf series
 */
const Cmf = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "cmf",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function CmfSeries(_props) {
    return null;
}
CmfSeries.type = "Series";
Cmf.Series = CmfSeries;
// TODO: Fix typings
// @ts-ignore:
CmfSeries.defaultProps = {
    type: "cmf",
};
Cmf.type = "SeriesChart";
export default Cmf;
//# sourceMappingURL=Cmf.js.map