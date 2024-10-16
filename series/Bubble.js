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
import SeriesMod from "highcharts/es-modules/Series/Bubble/BubbleSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Bubble series
 */
const Bubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bubble",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Bubble.Series = (_props) => React.createElement(React.Fragment, null);
Bubble.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Bubble.Series.defaultProps = {
    type: "bubble",
};
Bubble.type = "SeriesChart";
export default Bubble;
//# sourceMappingURL=Bubble.js.map