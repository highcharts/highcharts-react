/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-02-10
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Stock/Indicators/PPO/PPOIndicator.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Ppo series
 */
const Ppo = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "ppo",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PpoSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PpoSeries.type = "Series";
Ppo.Series = PpoSeries;
PpoSeries._HCReact = {
    type: "Series",
    HC_Option: "series.ppo",
    childOption: "series.ppo",
};
Ppo.type = "SeriesChart";
export default Ppo;
//# sourceMappingURL=Ppo.js.map