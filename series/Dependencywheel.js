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
import SeriesMod from "highcharts/es-modules/Series/DependencyWheel/DependencyWheelSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Dependencywheel series
 */
const Dependencywheel = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dependencywheel",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Dependencywheel.Series = (_props) => React.createElement(React.Fragment, null);
Dependencywheel.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Dependencywheel.Series.defaultProps = {
    type: "dependencywheel",
};
Dependencywheel.type = "SeriesChart";
export default Dependencywheel;
//# sourceMappingURL=Dependencywheel.js.map