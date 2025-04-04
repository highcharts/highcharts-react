/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-04
 *
 */
import { getHighcharts } from "../Highcharts";
import accessibility from "highcharts/es-modules/masters/modules/accessibility.src";
if (typeof getHighcharts().__provided === "undefined") {
    typeof accessibility === "function" && accessibility(getHighcharts());
}
export function Accessibility(props) {
    return null;
}
Accessibility._HCReact = {
    type: "HC_Option",
    HCOption: "accessibility",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Accessibility;
//# sourceMappingURL=Accessibility.js.map