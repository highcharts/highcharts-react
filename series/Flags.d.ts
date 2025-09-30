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
import React from "react";
import type { SeriesFlagsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Flags series
 */
declare const Flags: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof FlagsSeries;
    type: string;
};
interface FlagsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesFlagsOptions>;
    children?: React.ReactNode;
}
export declare function FlagsSeries(_props: FlagsSeriesProps): any;
export declare namespace FlagsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Flags;
