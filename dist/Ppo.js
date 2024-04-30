/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-04-30
 *
 */
import { useState, React,
// @ts-ignore
 } from "react";
import Highcharts, { HighchartsNS, } from "./Highcharts";
import Mod from "highcharts/es-modules/Stock/Indicators/PPO/PPOIndicator.js";
Mod(HighchartsNS);
/**
 * Ppo series
 */
var Ppo = function (props) {
    var chartConfig = useState(Object.assign({
        chart: {
            type: "ppo",
        },
    }, props.options || {}))[0];
    return (React.createElement(Highcharts, { title: props.title, csv: props.csv, csvURL: props.csvURL, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
Ppo.Series = function (_props) { return React.createElement(React.Fragment, null); };
// TODO: Fix typings
// @ts-ignore:
Ppo.Series.defaultProps = {
    type: "ppo",
};
export default Ppo;
//# sourceMappingURL=Ppo.js.map