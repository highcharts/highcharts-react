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
import type { SeriesFunnelOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Funnel series
 */
declare const Funnel: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof FunnelSeries;
    type: string;
};
export interface FunnelSeriesProps {
    type?: "funnel";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesFunnelOptions, "type">;
}
export declare function FunnelSeries(_props: FunnelSeriesProps): any;
export declare namespace FunnelSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Funnel;
