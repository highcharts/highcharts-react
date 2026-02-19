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
import type { SeriesVennOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Venn series
 */
declare const Venn: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VennSeries;
    type: string;
};
export interface VennSeriesProps {
    type?: "venn";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesVennOptions, "type">;
}
export declare function VennSeries(_props: VennSeriesProps): any;
export declare namespace VennSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Venn;
