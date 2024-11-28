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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/WMA/WMAIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Wma series
 */
const Wma = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "wma",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function WmaSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
WmaSeries.type = "Series";
Wma.Series = WmaSeries;
WmaSeries._HCReact = {
    type: "Series",
    HC_Option: "series.wma",
    childOption: "series.wma",
};
// TODO: Fix typings
// @ts-ignore:
WmaSeries.defaultProps = {
    type: "wma",
};
Wma.type = "SeriesChart";
export default Wma;
//# sourceMappingURL=Wma.js.map