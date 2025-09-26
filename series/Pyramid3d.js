/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/pyramid3d.src.js";
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
 * Pyramid3D series
 */
const Pyramid3D = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pyramid3d",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function Pyramid3DSeries(_props) {
    return null;
}
Pyramid3DSeries.type = "Series";
Pyramid3D.Series = Pyramid3DSeries;
Pyramid3DSeries._HCReact = {
    type: "Series",
    HC_Option: "series.pyramid3d",
    childOption: "series.pyramid3d",
};
Pyramid3D.type = "SeriesChart";
export default Pyramid3D;
//# sourceMappingURL=Pyramid3D.js.map