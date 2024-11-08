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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/Klinger/KlingerIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Klinger series
 */
const Klinger = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "klinger",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function KlingerSeries(_props) {
    return null;
}
KlingerSeries.type = "Series";
Klinger.Series = KlingerSeries;
// TODO: Fix typings
// @ts-ignore:
KlingerSeries.defaultProps = {
    type: "klinger",
};
Klinger.type = "SeriesChart";
export default Klinger;
//# sourceMappingURL=Klinger.js.map