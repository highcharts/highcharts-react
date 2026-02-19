/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import { getHighcharts } from "../Highcharts.js";
import drilldown from "highcharts/esm/modules/drilldown.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    typeof drilldown === "function" && drilldown(getHighcharts());
}
export function Drilldown(props) {
    return null;
}
Drilldown._HCReact = {
    type: "HC_Option",
    HCOption: "drilldown",
    childOption: "series",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Drilldown;
//# sourceMappingURL=Drilldown.js.map