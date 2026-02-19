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
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/arc-diagram.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    // Initialize series module
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
    else if (SeriesMod === null || SeriesMod === void 0 ? void 0 : SeriesMod.Chart) {
        setHighcharts(SeriesMod);
    }
}
/**
 * ArcDiagram series
 */
const ArcDiagram = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "arcdiagram",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ArcDiagramSeries(_props) {
    return null;
}
ArcDiagramSeries.type = "Series";
ArcDiagram.Series = ArcDiagramSeries;
ArcDiagramSeries._HCReact = {
    type: "Series",
    HCOption: "series.arcdiagram",
    childOption: "series.arcdiagram",
};
ArcDiagram.type = "SeriesChart";
export default ArcDiagram;
//# sourceMappingURL=ArcDiagram.js.map