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
import SeriesMod from "highcharts/es-modules/Series/SolidGauge/SolidGaugeSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Solidgauge series
 */
const Solidgauge = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "solidgauge",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SolidgaugeSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
SolidgaugeSeries.type = "Series";
Solidgauge.Series = SolidgaugeSeries;
SolidgaugeSeries._HCReact = {
    type: "Series",
    HC_Option: "series.solidgauge",
    childOption: "series.solidgauge",
};
// TODO: Fix typings
// @ts-ignore:
SolidgaugeSeries.defaultProps = {
    type: "solidgauge",
};
Solidgauge.type = "SeriesChart";
export default Solidgauge;
//# sourceMappingURL=Solidgauge.js.map