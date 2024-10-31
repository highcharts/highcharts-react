/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Highcharts, HighchartsNS } from "../Highcharts";
import SeriesMod from "highcharts/es-modules/Series/Item/ItemSeries.js";
if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(HighchartsNS);
}
/**
 * Item series
 */
const Item = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "item",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ItemSeries(_props) {
    return null;
}
ItemSeries.type = "Series";
Item.Series = ItemSeries;
// TODO: Fix typings
// @ts-ignore:
ItemSeries.defaultProps = {
    type: "item",
};
Item.type = "SeriesChart";
export default Item;
//# sourceMappingURL=Item.js.map