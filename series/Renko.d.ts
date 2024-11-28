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
import type { SeriesRenkoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Renko series
 */
declare const Renko: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof RenkoSeries;
    type: string;
};
interface RenkoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesRenkoOptions>;
    children?: React.ReactNode;
}
export declare function RenkoSeries(_props: RenkoSeriesProps): any;
export declare namespace RenkoSeries {
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
export default Renko;
