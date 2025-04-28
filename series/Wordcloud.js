/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-28
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/wordcloud.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
}
/**
 * Wordcloud series
 */
const Wordcloud = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "wordcloud",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function WordcloudSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
WordcloudSeries.type = "Series";
Wordcloud.Series = WordcloudSeries;
WordcloudSeries._HCReact = {
    type: "Series",
    HC_Option: "series.wordcloud",
    childOption: "series.wordcloud",
};
Wordcloud.type = "SeriesChart";
export default Wordcloud;
//# sourceMappingURL=Wordcloud.js.map