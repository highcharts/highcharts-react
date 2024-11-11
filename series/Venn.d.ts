/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React from "react";
import type { SeriesVennOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Venn series
 */
declare const Venn: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof VennSeries;
    type: string;
};
interface VennSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVennOptions>;
}
export declare function VennSeries(_props: VennSeriesProps): any;
export declare namespace VennSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Venn;