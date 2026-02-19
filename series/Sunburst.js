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
import SeriesMod from "highcharts/esm/modules/sunburst.src.js";
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
 * Sunburst series
 */
const Sunburst = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "sunburst",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function SunburstSeries(_props) {
    return null;
}
SunburstSeries.type = "Series";
Sunburst.Series = SunburstSeries;
SunburstSeries._HCReact = {
    type: "Series",
    HCOption: "series.sunburst",
    childOption: "series.sunburst",
};
Sunburst.type = "SeriesChart";
export default Sunburst;
//# sourceMappingURL=Sunburst.js.map