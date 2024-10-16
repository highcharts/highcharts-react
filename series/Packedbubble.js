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
import SeriesMod from "highcharts/es-modules/Series/PackedBubble/PackedBubbleSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Packedbubble series
 */
const Packedbubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "packedbubble",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Packedbubble.Series = (_props) => React.createElement(React.Fragment, null);
Packedbubble.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Packedbubble.Series.defaultProps = {
    type: "packedbubble",
};
Packedbubble.type = "SeriesChart";
export default Packedbubble;
//# sourceMappingURL=Packedbubble.js.map