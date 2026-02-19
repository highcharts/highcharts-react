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
import type { SeriesTreegraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Treegraph series
 */
declare const Treegraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TreegraphSeries;
    type: string;
};
export interface TreegraphSeriesProps {
    type?: "treegraph";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesTreegraphOptions, "type">;
}
export declare function TreegraphSeries(_props: TreegraphSeriesProps): any;
export declare namespace TreegraphSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Treegraph;
