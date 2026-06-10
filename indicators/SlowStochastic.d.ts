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
import type { SeriesSlowstochasticOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * SlowStochastic series
 */
declare const SlowStochastic: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof SlowStochasticSeries;
    type: string;
};
type SeriesSlowstochasticConfig = Omit<SeriesSlowstochasticOptions, "type">;
export interface SlowStochasticSeriesProps {
    id?: SeriesSlowstochasticConfig["id"];
    index?: SeriesSlowstochasticConfig["index"];
    name?: SeriesSlowstochasticConfig["name"];
    className?: SeriesSlowstochasticConfig["className"];
    color?: SeriesSlowstochasticConfig["color"];
    events?: SeriesSlowstochasticConfig["events"];
    options?: SeriesSlowstochasticConfig;
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
