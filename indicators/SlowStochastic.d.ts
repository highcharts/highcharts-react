/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import React from "react";
import type { SeriesSlowStochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * SlowStochastic series
 */
declare const SlowStochastic: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SlowStochasticSeries;
    type: string;
};
export interface SlowStochasticSeriesProps {
    type?: "slowstochastic";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesSlowStochasticOptions, "type">;
}
export declare function SlowStochasticSeries(_props: SlowStochasticSeriesProps): any;
export declare namespace SlowStochasticSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default SlowStochastic;
