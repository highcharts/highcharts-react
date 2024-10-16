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
import { Highcharts } from "../Highcharts";
/**
 * Mapbubble series
 */
const Mapbubble = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "mapbubble",
        },
    }, props.options || {}));
    return (React.createElement(Highcharts, { title: props.title, chartConstructor: "mapChart", options: chartConfig }, props.children));
};
Mapbubble.Series = (_props) => React.createElement(React.Fragment, null);
Mapbubble.Series.type = "Series";
// TODO: Fix typings
// @ts-ignore:
Mapbubble.Series.defaultProps = {
    type: "mapbubble",
};
Mapbubble.type = "SeriesChart";
export default Mapbubble;
//# sourceMappingURL=Mapbubble.js.map