/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DMI/DMIIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DmiSeries(_props) {
    return null;
}
DmiSeries.type = "Series";
Dmi.Series = DmiSeries;
// TODO: Fix typings
// @ts-ignore:
DmiSeries.defaultProps = {
    type: "dmi",
};
Dmi.type = "SeriesChart";
export default Dmi;
//# sourceMappingURL=Dmi.js.map