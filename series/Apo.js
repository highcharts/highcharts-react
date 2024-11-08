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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/APO/APOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Apo series
 */
const Apo = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "apo",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function ApoSeries(_props) {
    return null;
}
ApoSeries.type = "Series";
Apo.Series = ApoSeries;
// TODO: Fix typings
// @ts-ignore:
ApoSeries.defaultProps = {
    type: "apo",
};
Apo.type = "SeriesChart";
export default Apo;
//# sourceMappingURL=Apo.js.map