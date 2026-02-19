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
import type { SeriesNATROptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * NATR series
 */
declare const NATR: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof NATRSeries;
    type: string;
};
export interface NATRSeriesProps {
    type?: "natr";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesNATROptions, "type">;
}
export declare function NATRSeries(_props: NATRSeriesProps): any;
export declare namespace NATRSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default NATR;
