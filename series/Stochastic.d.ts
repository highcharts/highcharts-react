/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-07-17
 *
 */
import React from "react";
import type { SeriesStochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Stochastic series
 */
declare const Stochastic: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof StochasticSeries;
    type: string;
};
interface StochasticSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesStochasticOptions>;
    children?: React.ReactNode;
}
export declare function StochasticSeries(_props: StochasticSeriesProps): any;
export declare namespace StochasticSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default Stochastic;
