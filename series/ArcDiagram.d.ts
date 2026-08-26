/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.1.
 * Build stamp: 2026-08-26
 *
 */
import React from "react";
import type { SeriesArcdiagramOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Arc diagram series is a chart drawing style in which the vertices of the
 * chart are positioned along a line on the Euclidean plane and the edges are
 * drawn as a semicircle in one of the two half-planes delimited by the line,
 * or as smooth curves formed by sequences of semicircles.
 *
 * A ready-made chart with `chart.type` set to `arcdiagram`. Declare the data
 * with `<ArcDiagram.Series>`, or use `ArcDiagramSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <ArcDiagram>
 *   <ArcDiagram.Series data={[1, 2, 3]} />
 * </ArcDiagram>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.arcdiagram
 */
declare function ArcDiagram(props: ICommonAttributes): React.JSX.Element;
declare namespace ArcDiagram {
    export { ArcDiagramSeries as Series };
    export var type: string;
}
type SeriesArcdiagramConfig = Omit<SeriesArcdiagramOptions, "type">;
/** Props for the `<ArcDiagramSeries />` component. */
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
/**
 * Arc diagram series is a chart drawing style in which the vertices of the
 * chart are positioned along a line on the Euclidean plane and the edges are
 * drawn as a semicircle in one of the two half-planes delimited by the line,
 * or as smooth curves formed by sequences of semicircles.
 *
 * Renders the `arcdiagram` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <ArcDiagramSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.arcdiagram
 */
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
