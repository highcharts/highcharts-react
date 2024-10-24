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
export function PackedbubbleSeries(_props) {
    return null;
}
PackedbubbleSeries.type = "Series";
Packedbubble.Series = PackedbubbleSeries;
// TODO: Fix typings
// @ts-ignore:
PackedbubbleSeries.defaultProps = {
    type: "packedbubble",
};
Packedbubble.type = "SeriesChart";
export default Packedbubble;
//# sourceMappingURL=Packedbubble.js.map