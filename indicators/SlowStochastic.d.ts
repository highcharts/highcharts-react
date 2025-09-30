/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesSlowStochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * SlowStochastic series
 */
declare const SlowStochastic: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SlowStochasticSeries;
    type: string;
};
interface SlowStochasticSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSlowStochasticOptions>;
    children?: React.ReactNode;
}
export declare function SlowStochasticSeries(_props: SlowStochasticSeriesProps): any;
export declare namespace SlowStochasticSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default SlowStochastic;
