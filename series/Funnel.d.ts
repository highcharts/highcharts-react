/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-06-11
 *
 */
import React from "react";
import type { SeriesFunnelOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Funnel series
 */
declare const Funnel: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof FunnelSeries;
    type: string;
};
interface FunnelSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesFunnelOptions>;
    children?: React.ReactNode;
}
export declare function FunnelSeries(_props: FunnelSeriesProps): any;
export declare namespace FunnelSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Funnel;
