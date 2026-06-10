/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v12.6.0.
 * Build stamp: 2026-06-10
 *
 */
import React from "react";
import type { SeriesArcdiagramOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * ArcDiagram series
 */
declare const ArcDiagram: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ArcDiagramSeries;
    type: string;
};
type SeriesArcdiagramConfig = Omit<SeriesArcdiagramOptions, "type">;
export interface ArcDiagramSeriesProps {
    id?: SeriesArcdiagramConfig["id"];
    index?: SeriesArcdiagramConfig["index"];
    name?: SeriesArcdiagramConfig["name"];
    className?: SeriesArcdiagramConfig["className"];
    color?: SeriesArcdiagramConfig["color"];
    events?: SeriesArcdiagramConfig["events"];
    data?: SeriesArcdiagramConfig["data"];
    options?: SeriesArcdiagramConfig;
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
