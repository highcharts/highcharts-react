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
import type { SeriesTreegraphOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Treegraph series
 */
declare const Treegraph: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof TreegraphSeries;
    type: string;
};
interface TreegraphSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTreegraphOptions>;
    children?: React.ReactNode;
}
export declare function TreegraphSeries(_props: TreegraphSeriesProps): any;
export declare namespace TreegraphSeries {
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
export default Treegraph;
