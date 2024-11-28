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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/CCI/CCIIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
// TODO: Fix typings
// @ts-ignore:
CciSeries.defaultProps = {
    type: "cci",
};
Cci.type = "SeriesChart";
export default Cci;
//# sourceMappingURL=Cci.js.map