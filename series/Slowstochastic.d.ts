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
import type { SeriesSlowstochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Slowstochastic series
 */
declare const Slowstochastic: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SlowstochasticSeries;
    type: string;
};
interface SlowstochasticSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSlowstochasticOptions>;
}
export declare function SlowstochasticSeries(_props: SlowstochasticSeriesProps): any;
export declare namespace SlowstochasticSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Slowstochastic;
