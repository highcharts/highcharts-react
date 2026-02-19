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
import type { SeriesAOOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * AO series
 */
declare const AO: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof AOSeries;
    type: string;
};
export interface AOSeriesProps {
    type?: "ao";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesAOOptions, "type">;
}
export declare function AOSeries(_props: AOSeriesProps): any;
export declare namespace AOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AO;
