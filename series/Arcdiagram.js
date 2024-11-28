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
import SeriesMod from "highcharts/es-modules/Series/ArcDiagram/ArcDiagramSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ArcdiagramSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ArcdiagramSeries.type = "Series";
Arcdiagram.Series = ArcdiagramSeries;
ArcdiagramSeries._HCReact = {
    type: "Series",
    HC_Option: "series.arcdiagram",
    childOption: "series.arcdiagram",
};
// TODO: Fix typings
// @ts-ignore:
ArcdiagramSeries.defaultProps = {
    type: "arcdiagram",
};
Arcdiagram.type = "SeriesChart";
export default Arcdiagram;
//# sourceMappingURL=Arcdiagram.js.map