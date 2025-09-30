/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-09-30
 *
 */
import React from "react";
import type { SeriesFlowMapOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * FlowMap series
 */
declare const FlowMap: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof FlowMapSeries;
    type: string;
};
interface FlowMapSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesFlowMapOptions>;
    children?: React.ReactNode;
}
export declare function FlowMapSeries(_props: FlowMapSeriesProps): any;
export declare namespace FlowMapSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default FlowMap;
