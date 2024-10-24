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
}
export declare function SankeySeries(_props: SankeySeriesProps): any;
export declare namespace SankeySeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Sankey;
