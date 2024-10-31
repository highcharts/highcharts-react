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
import SeriesMod from "highcharts/es-modules/Series/Sankey/SankeySeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Sankey series
 */
const Sankey = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sankey",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SankeySeries(_props) {
    return null;
}
SankeySeries.type = "Series";
Sankey.Series = SankeySeries;
// TODO: Fix typings
// @ts-ignore:
SankeySeries.defaultProps = {
    type: "sankey",
};
Sankey.type = "SeriesChart";
export default Sankey;
//# sourceMappingURL=Sankey.js.map