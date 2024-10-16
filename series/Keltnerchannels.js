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
Keltnerchannels.Series = (_props) => React.createElement(React.Fragment, null);
Keltnerchannels.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Keltnerchannels.Series.defaultProps = {
    type: "keltnerchannels",
};
Keltnerchannels.type = "SeriesChart";
export default Keltnerchannels;
//# sourceMappingURL=Keltnerchannels.js.map