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
import { Highcharts } from "../Highcharts";
/**
 * Flags series
 */
const Flags = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "flags",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function FlagsSeries(_props) {
    return null;
}
FlagsSeries.type = "Series";
Flags.Series = FlagsSeries;
// TODO: Fix typings
// @ts-ignore:
FlagsSeries.defaultProps = {
    type: "flags",
};
Flags.type = "SeriesChart";
export default Flags;
//# sourceMappingURL=Flags.js.map