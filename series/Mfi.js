/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/MFI/MFIIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Mfi series
 */
const Mfi = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mfi",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function MfiSeries(_props) {
    return null;
}
MfiSeries.type = "Series";
Mfi.Series = MfiSeries;
// TODO: Fix typings
// @ts-ignore:
MfiSeries.defaultProps = {
    type: "mfi",
};
Mfi.type = "SeriesChart";
export default Mfi;
//# sourceMappingURL=Mfi.js.map