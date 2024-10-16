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
import SeriesMod from "highcharts/es-modules/Series/Wordcloud/WordcloudSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
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
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
Wordcloud.Series = (_props) => React.createElement(React.Fragment, null);
Wordcloud.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Wordcloud.Series.defaultProps = {
    type: "wordcloud",
};
Wordcloud.type = "SeriesChart";
export default Wordcloud;
//# sourceMappingURL=Wordcloud.js.map