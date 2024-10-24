/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
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
}
export declare function FunnelSeries(_props: FunnelSeriesProps): any;
export declare namespace FunnelSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Funnel;
