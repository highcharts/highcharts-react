/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-05-07
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts } from "../Highcharts";
import SeriesMod from "highcharts/esm/modules/item.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
        SeriesMod(getHighcharts());
    }
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
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function ItemSeries(_props) {
    return null;
}
// TODO: replace uses of this with _HCReact.type
ItemSeries.type = "Series";
Item.Series = ItemSeries;
ItemSeries._HCReact = {
    type: "Series",
    HC_Option: "series.item",
    childOption: "series.item",
};
Item.type = "SeriesChart";
export default Item;
//# sourceMappingURL=Item.js.map