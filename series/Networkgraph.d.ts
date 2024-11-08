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
import type { SeriesNetworkgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Networkgraph series
 */
declare const Networkgraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof NetworkgraphSeries;
    type: string;
};
interface NetworkgraphSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesNetworkgraphOptions>;
}
export declare function NetworkgraphSeries(_props: NetworkgraphSeriesProps): any;
export declare namespace NetworkgraphSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Networkgraph;
