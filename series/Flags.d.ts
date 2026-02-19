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
export interface FlagsSeriesProps {
    type?: "flags";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesFlagsOptions, "type">;
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
