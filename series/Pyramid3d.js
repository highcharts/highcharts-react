/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Pyramid3D/Pyramid3DSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Pyramid3d series
 */
const Pyramid3d = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "pyramid3d",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Pyramid3d.Series = (_props) => React.createElement(React.Fragment, null);
Pyramid3d.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Pyramid3d.Series.defaultProps = {
    type: "pyramid3d",
};
Pyramid3d.type = "SeriesChart";
export default Pyramid3d;
//# sourceMappingURL=Pyramid3d.js.map