/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
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
    Series(_props: StochasticSeriesProps): React.JSX.Element;
    type: string;
};
interface StochasticSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesStochasticOptions>;
}
export default Stochastic;
