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
import SeriesMod from "highcharts/es-modules/Series/Venn/VennSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Venn series
 */
const Venn = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "venn",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function VennSeries(_props) {
    return null;
}
VennSeries.type = "Series";
Venn.Series = VennSeries;
// TODO: Fix typings
// @ts-ignore:
VennSeries.defaultProps = {
    type: "venn",
};
Venn.type = "SeriesChart";
export default Venn;
//# sourceMappingURL=Venn.js.map