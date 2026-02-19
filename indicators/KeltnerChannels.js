/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/indicators/keltner-channels.src.js";
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
 * KeltnerChannels series
 */
const KeltnerChannels = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "keltnerchannels",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function KeltnerChannelsSeries(_props) {
    return null;
}
KeltnerChannelsSeries.type = "Series";
KeltnerChannels.Series = KeltnerChannelsSeries;
KeltnerChannelsSeries._HCReact = {
    type: "Series",
    HCOption: "series.keltnerchannels",
    childOption: "series.keltnerchannels",
};
KeltnerChannels.type = "SeriesChart";
export default KeltnerChannels;
//# sourceMappingURL=KeltnerChannels.js.map