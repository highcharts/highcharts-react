/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */
import React from "react";
import type { SeriesPcOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pc series
 */
declare const Pc: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof PcSeries;
    type: string;
};
interface PcSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPcOptions>;
    children?: React.ReactNode;
}
export declare function PcSeries(_props: PcSeriesProps): any;
export declare namespace PcSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Pc;
