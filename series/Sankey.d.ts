/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-23
 *
 */
import React from "react";
import type { SeriesSankeyOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Sankey series
 */
declare const Sankey: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SankeySeries;
    type: string;
};
interface SankeySeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSankeyOptions>;
    children?: React.ReactNode;
}
export declare function SankeySeries(_props: SankeySeriesProps): any;
export declare namespace SankeySeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Sankey;
