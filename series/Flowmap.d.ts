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
import type { SeriesFlowmapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Flowmap series
 */
declare const Flowmap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof FlowmapSeries;
    type: string;
};
interface FlowmapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesFlowmapOptions>;
    children?: React.ReactNode;
}
export declare function FlowmapSeries(_props: FlowmapSeriesProps): any;
export declare namespace FlowmapSeries {
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
export default Flowmap;
