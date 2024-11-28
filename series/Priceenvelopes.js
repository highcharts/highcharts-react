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
import SeriesMod from "highcharts/es-modules/Stock/Indicators/PriceEnvelopes/PriceEnvelopesIndicator.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(Highcharts);
}
/**
 * Priceenvelopes series
 */
const Priceenvelopes = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "priceenvelopes",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PriceenvelopesSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
PriceenvelopesSeries.type = "Series";
Priceenvelopes.Series = PriceenvelopesSeries;
PriceenvelopesSeries._HCReact = {
    type: "Series",
    HC_Option: "series.priceenvelopes",
    childOption: "series.priceenvelopes",
};
// TODO: Fix typings
// @ts-ignore:
PriceenvelopesSeries.defaultProps = {
    type: "priceenvelopes",
};
Priceenvelopes.type = "SeriesChart";
export default Priceenvelopes;
//# sourceMappingURL=Priceenvelopes.js.map