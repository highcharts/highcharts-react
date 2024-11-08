/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */
import React from "react";
import type { SeriesStreamgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Streamgraph series
 */
declare const Streamgraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof StreamgraphSeries;
    type: string;
};
interface StreamgraphSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesStreamgraphOptions>;
}
export declare function StreamgraphSeries(_props: StreamgraphSeriesProps): any;
export declare namespace StreamgraphSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Streamgraph;
