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
import SeriesMod from "highcharts/es-modules/Series/ArcDiagram/ArcDiagramSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Arcdiagram series
 */
const Arcdiagram = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "arcdiagram",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ArcdiagramSeries(_props) {
    return null;
}
ArcdiagramSeries.type = "Series";
Arcdiagram.Series = ArcdiagramSeries;
// TODO: Fix typings
// @ts-ignore:
ArcdiagramSeries.defaultProps = {
    type: "arcdiagram",
};
Arcdiagram.type = "SeriesChart";
export default Arcdiagram;
//# sourceMappingURL=Arcdiagram.js.map