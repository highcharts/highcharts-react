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
import type { SeriesArcDiagramOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * ArcDiagram series
 */
declare const ArcDiagram: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ArcDiagramSeries;
    type: string;
};
interface ArcDiagramSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesArcDiagramOptions>;
    children?: React.ReactNode;
}
export declare function ArcDiagramSeries(_props: ArcDiagramSeriesProps): any;
export declare namespace ArcDiagramSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HC_Option: string;
        childOption: string;
    };
}
export default ArcDiagram;
