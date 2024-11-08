/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
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
}
export declare function FlagsSeries(_props: FlagsSeriesProps): any;
export declare namespace FlagsSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Flags;
