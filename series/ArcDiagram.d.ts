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
import type { SeriesArcDiagramOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * ArcDiagram series
 */
declare const ArcDiagram: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ArcDiagramSeries;
    type: string;
};
export interface ArcDiagramSeriesProps {
    type?: "arcdiagram";
    data?: number[] | Object;
    id?: string;
    className?: string;
    options?: Omit<SeriesArcDiagramOptions, "type">;
}
export declare function ArcDiagramSeries(_props: ArcDiagramSeriesProps): any;
export declare namespace ArcDiagramSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ArcDiagram;
