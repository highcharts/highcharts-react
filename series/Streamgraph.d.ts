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
import type { SeriesStreamgraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Streamgraph series
 */
declare const Streamgraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof StreamgraphSeries;
    type: string;
};
export interface StreamgraphSeriesProps {
    type?: "streamgraph";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesStreamgraphOptions, "type">;
}
export declare function StreamgraphSeries(_props: StreamgraphSeriesProps): any;
export declare namespace StreamgraphSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Streamgraph;
