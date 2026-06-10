/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesStochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Stochastic series
 */
declare const Stochastic: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof StochasticSeries;
    type: string;
};
type SeriesStochasticConfig = Omit<SeriesStochasticOptions, "type">;
export interface StochasticSeriesProps {
    id?: SeriesStochasticConfig["id"];
    index?: SeriesStochasticConfig["index"];
    name?: SeriesStochasticConfig["name"];
    className?: SeriesStochasticConfig["className"];
    color?: SeriesStochasticConfig["color"];
    events?: SeriesStochasticConfig["events"];
    options?: SeriesStochasticConfig;
}
export declare function StochasticSeries(_props: StochasticSeriesProps): any;
export declare namespace StochasticSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Stochastic;
