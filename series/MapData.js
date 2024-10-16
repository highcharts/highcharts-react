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
import SeriesMod from "highcharts/es-modules/Series/Map/MapSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * MapData series
 */
const MapData = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapdata",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
MapData.Series = (_props) => React.createElement(React.Fragment, null);
MapData.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
MapData.Series.defaultProps = {
    type: "mapdata",
};
MapData.type = "SeriesChart";
export default MapData;
//# sourceMappingURL=MapData.js.map