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
import { getHighcharts } from "../Highcharts.js";
import data from "highcharts/esm/modules/data.src.js";
if (typeof getHighcharts().__provided === "undefined") {
    typeof data === "function" && data(getHighcharts());
}
export function Data(props) {
    return null;
}
Data._HCReact = {
    type: "HC_Option",
    HCOption: "data",
    childOption: "",
    defaultOptions: undefined,
    isArrayType: false,
};
export default Data;
//# sourceMappingURL=Data.js.map