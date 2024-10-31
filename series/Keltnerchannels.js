/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Keltnerchannels series
 */
const Keltnerchannels = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "keltnerchannels",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function KeltnerchannelsSeries(_props) {
    return null;
}
KeltnerchannelsSeries.type = "Series";
Keltnerchannels.Series = KeltnerchannelsSeries;
// TODO: Fix typings
// @ts-ignore:
KeltnerchannelsSeries.defaultProps = {
    type: "keltnerchannels",
};
Keltnerchannels.type = "SeriesChart";
export default Keltnerchannels;
//# sourceMappingURL=Keltnerchannels.js.map