/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-26
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/indicators/price-envelopes.src.js";
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
 * PriceEnvelopes series
 */
const PriceEnvelopes = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "priceenvelopes",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "stockChart", options: chartConfig }, props.children));
};
export function PriceEnvelopesSeries(_props) {
    return null;
}
PriceEnvelopesSeries.type = "Series";
PriceEnvelopes.Series = PriceEnvelopesSeries;
PriceEnvelopesSeries._HCReact = {
    type: "Series",
    HC_Option: "series.priceenvelopes",
    childOption: "series.priceenvelopes",
};
PriceEnvelopes.type = "SeriesChart";
export default PriceEnvelopes;
//# sourceMappingURL=PriceEnvelopes.js.map