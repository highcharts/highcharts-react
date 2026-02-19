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
import type { SeriesRenkoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Renko series
 */
declare const Renko: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof RenkoSeries;
    type: string;
};
export interface RenkoSeriesProps {
    type?: "renko";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesRenkoOptions, "type">;
}
export declare function RenkoSeries(_props: RenkoSeriesProps): any;
export declare namespace RenkoSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Renko;
