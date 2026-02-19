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
import type { SeriesSankeyOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Sankey series
 */
declare const Sankey: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SankeySeries;
    type: string;
};
export interface SankeySeriesProps {
    type?: "sankey";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesSankeyOptions, "type">;
}
export declare function SankeySeries(_props: SankeySeriesProps): any;
export declare namespace SankeySeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Sankey;
