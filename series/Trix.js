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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/TRIX/TRIXIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Trix series
 */
const Trix = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "trix",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function TrixSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
TrixSeries.type = "Series";
Trix.Series = TrixSeries;
TrixSeries._HCReact = {
    type: "Series",
    HC_Option: "series.trix",
    childOption: "series.trix",
};
// TODO: Fix typings
// @ts-ignore:
TrixSeries.defaultProps = {
    type: "trix",
};
Trix.type = "SeriesChart";
export default Trix;
//# sourceMappingURL=Trix.js.map