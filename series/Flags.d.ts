/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesFlagsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Flags series
 */
declare const Flags: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof FlagsSeries;
    type: string;
};
type SeriesFlagsConfig = Omit<SeriesFlagsOptions, "type">;
export interface FlagsSeriesProps {
    id?: SeriesFlagsConfig["id"];
    index?: SeriesFlagsConfig["index"];
    name?: SeriesFlagsConfig["name"];
    className?: SeriesFlagsConfig["className"];
    color?: SeriesFlagsConfig["color"];
    events?: SeriesFlagsConfig["events"];
    data?: SeriesFlagsConfig["data"];
    options?: SeriesFlagsConfig;
}
export declare function FlagsSeries(_props: FlagsSeriesProps): any;
export declare namespace FlagsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Flags;
