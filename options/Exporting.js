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
import exporting from "highcharts/es-modules/masters/modules/exporting.src";
if (typeof getHighcharts().__provided === "undefined") {
    typeof exporting === "function" && exporting(getHighcharts());
}
import offlineexporting from "highcharts/es-modules/masters/modules/offline-exporting.src";
if (typeof getHighcharts().__provided === "undefined") {
    typeof offlineexporting === "function" && offlineexporting(getHighcharts());
}
import exportdata from "highcharts/es-modules/masters/modules/export-data.src";
if (typeof getHighcharts().__provided === "undefined") {
    typeof exportdata === "function" && exportdata(getHighcharts());
}
export function Exporting(props) {
    return null;
}
Exporting._HCReact = {
    type: "HC_Option",
    HCOption: "exporting",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Exporting;
//# sourceMappingURL=Exporting.js.map