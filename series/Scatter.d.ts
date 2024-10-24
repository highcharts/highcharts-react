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
import type { SeriesScatterOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Scatter series
 */
declare const Scatter: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ScatterSeries;
    type: string;
};
interface ScatterSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesScatterOptions>;
}
export declare function ScatterSeries(_props: ScatterSeriesProps): any;
export declare namespace ScatterSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Scatter;
