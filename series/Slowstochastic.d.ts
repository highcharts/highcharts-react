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
import type { SeriesSlowstochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Slowstochastic series
 */
declare const Slowstochastic: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: SlowstochasticSeriesProps): React.JSX.Element;
    type: string;
};
interface SlowstochasticSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSlowstochasticOptions>;
}
export default Slowstochastic;
