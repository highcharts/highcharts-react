/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, Highcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/KeltnerChannels/KeltnerChannelsIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function KeltnerchannelsSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
KeltnerchannelsSeries.type = "Series";
Keltnerchannels.Series = KeltnerchannelsSeries;
KeltnerchannelsSeries._HCReact = {
    type: "Series",
    HC_Option: "series.keltnerchannels",
    childOption: "series.keltnerchannels",
};
// TODO: Fix typings
// @ts-ignore:
KeltnerchannelsSeries.defaultProps = {
    type: "keltnerchannels",
};
Keltnerchannels.type = "SeriesChart";
export default Keltnerchannels;
//# sourceMappingURL=Keltnerchannels.js.map