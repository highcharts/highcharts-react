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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DMI/DMIIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Dmi series
 */
const Dmi = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dmi",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DmiSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
DmiSeries.type = "Series";
Dmi.Series = DmiSeries;
DmiSeries._HCReact = {
    type: "Series",
    HC_Option: "series.dmi",
    childOption: "series.dmi",
};
// TODO: Fix typings
// @ts-ignore:
DmiSeries.defaultProps = {
    type: "dmi",
};
Dmi.type = "SeriesChart";
export default Dmi;
//# sourceMappingURL=Dmi.js.map