/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React, { useState,
// @ts-ignore
 } from "react";
import { Chart, getHighcharts, setHighcharts } from "../Highcharts.js";
import SeriesMod from "highcharts/esm/modules/bullet.src.js";
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
 * Bullet series
 */
const Bullet = (props) => {
    const [chartConfig] = useState(Object.assign({
        chart: {
            type: "bullet",
        },
    }, props.options || {}));
    return (React.createElement(Chart, { title: props.title, chartConstructor: "chart", options: chartConfig }, props.children));
};
export function BulletSeries(_props) {
    return null;
}
BulletSeries.type = "Series";
Bullet.Series = BulletSeries;
BulletSeries._HCReact = {
    type: "Series",
    HC_Option: "series.bullet",
    childOption: "series.bullet",
};
Bullet.type = "SeriesChart";
export default Bullet;
//# sourceMappingURL=Bullet.js.map