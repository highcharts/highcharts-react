/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart } from "../Highcharts.js";
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
FlagsSeries.type = "Series";
Flags.Series = FlagsSeries;
FlagsSeries._HCReact = {
    type: "Series",
    HCOption: "series.flags",
    childOption: "series.flags",
};
Flags.type = "SeriesChart";
export default Flags;
//# sourceMappingURL=Flags.js.map