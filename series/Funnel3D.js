/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/funnel3d.src.js";
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
 * Funnel3D series
 */
const Funnel3D = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "funnel3d",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function Funnel3DSeries(_props) {
    return null;
}
Funnel3DSeries.type = "Series";
Funnel3D.Series = Funnel3DSeries;
Funnel3DSeries._HCReact = {
    type: "Series",
    HC_Option: "series.funnel3d",
    childOption: "series.funnel3d",
};
Funnel3D.type = "SeriesChart";
export default Funnel3D;
//# sourceMappingURL=Funnel3D.js.map