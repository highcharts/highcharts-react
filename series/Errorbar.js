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
import SeriesMod from "highcharts/es-modules/Series/ErrorBar/ErrorBarSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Errorbar series
 */
const Errorbar = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "errorbar",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ErrorbarSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ErrorbarSeries.type = "Series";
Errorbar.Series = ErrorbarSeries;
ErrorbarSeries._HCReact = {
    type: "Series",
    HC_Option: "series.errorbar",
    childOption: "series.errorbar",
};
// TODO: Fix typings
// @ts-ignore:
ErrorbarSeries.defaultProps = {
    type: "errorbar",
};
Errorbar.type = "SeriesChart";
export default Errorbar;
//# sourceMappingURL=Errorbar.js.map