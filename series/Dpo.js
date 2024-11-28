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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/DPO/DPOIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Dpo series
 */
const Dpo = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "dpo",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function DpoSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
DpoSeries.type = "Series";
Dpo.Series = DpoSeries;
DpoSeries._HCReact = {
    type: "Series",
    HC_Option: "series.dpo",
    childOption: "series.dpo",
};
// TODO: Fix typings
// @ts-ignore:
DpoSeries.defaultProps = {
    type: "dpo",
};
Dpo.type = "SeriesChart";
export default Dpo;
//# sourceMappingURL=Dpo.js.map