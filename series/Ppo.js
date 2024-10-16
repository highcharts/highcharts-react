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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/PPO/PPOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Ppo.Series = (_props) => React.createElement(React.Fragment, null);
Ppo.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Ppo.Series.defaultProps = {
    type: "ppo",
};
Ppo.type = "SeriesChart";
export default Ppo;
//# sourceMappingURL=Ppo.js.map