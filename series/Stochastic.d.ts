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
}
export declare function StochasticSeries(_props: StochasticSeriesProps): any;
export declare namespace StochasticSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Stochastic;
