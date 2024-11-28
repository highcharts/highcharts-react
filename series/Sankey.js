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
import SeriesMod from "highcharts/es-modules/Series/Sankey/SankeySeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SankeySeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
SankeySeries.type = "Series";
Sankey.Series = SankeySeries;
SankeySeries._HCReact = {
    type: "Series",
    HC_Option: "series.sankey",
    childOption: "series.sankey",
};
// TODO: Fix typings
// @ts-ignore:
SankeySeries.defaultProps = {
    type: "sankey",
};
Sankey.type = "SeriesChart";
export default Sankey;
//# sourceMappingURL=Sankey.js.map