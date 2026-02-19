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
import type { SeriesNetworkgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Networkgraph series
 */
declare const Networkgraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof NetworkgraphSeries;
    type: string;
};
export interface NetworkgraphSeriesProps {
    type?: "networkgraph";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesNetworkgraphOptions, "type">;
}
export declare function NetworkgraphSeries(_props: NetworkgraphSeriesProps): any;
export declare namespace NetworkgraphSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Networkgraph;
