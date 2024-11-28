/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
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
    children?: React.ReactNode;
}
export declare function SlowstochasticSeries(_props: SlowstochasticSeriesProps): any;
export declare namespace SlowstochasticSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
    var defaultProps: {
        type: string;
    };
}
export default Slowstochastic;
