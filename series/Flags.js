/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
if (typeof getHighcharts().__provided === "undefined") {
}
/**
 * Flags series
 */
const Flags = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "flags",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function FlagsSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
FlagsSeries.type = "Series";
Flags.Series = FlagsSeries;
FlagsSeries._HCReact = {
    type: "Series",
    HC_Option: "series.flags",
    childOption: "series.flags",
};
Flags.type = "SeriesChart";
export default Flags;
//# sourceMappingURL=Flags.js.map