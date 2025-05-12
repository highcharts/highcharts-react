/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-12
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/wma.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
Wma.type = "SeriesChart";
export default Wma;
//# sourceMappingURL=Wma.js.map