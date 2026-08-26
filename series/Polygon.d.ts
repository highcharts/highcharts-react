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
import type { SeriesPolygonOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A polygon series can be used to draw any freeform shape in the cartesian
 * coordinate system. A fill is applied with the `color` option, and stroke is
 * applied through `lineWidth` and `lineColor` options.
 *
 * A ready-made chart with `chart.type` set to `polygon`. Declare the data with
 * `<Polygon.Series>`, or use `PolygonSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Polygon>
 *   <Polygon.Series data={[1, 2, 3]} />
 * </Polygon>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.polygon
 */
declare function Polygon(props: ICommonAttributes): React.JSX.Element;
declare namespace Polygon {
    export { PolygonSeries as Series };
    export var type: string;
}
type SeriesPolygonConfig = Omit<SeriesPolygonOptions, "type">;
/** Props for the `<PolygonSeries />` component. */
export interface PolygonSeriesProps {
    id?: SeriesPolygonConfig["id"];
    index?: SeriesPolygonConfig["index"];
    name?: SeriesPolygonConfig["name"];
    className?: SeriesPolygonConfig["className"];
    color?: SeriesPolygonConfig["color"];
    events?: SeriesPolygonConfig["events"];
    data?: SeriesPolygonConfig["data"];
    options?: SeriesPolygonConfig;
}
/**
 * A polygon series can be used to draw any freeform shape in the cartesian
 * coordinate system. A fill is applied with the `color` option, and stroke is
 * applied through `lineWidth` and `lineColor` options.
 *
 * Renders the `polygon` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <PolygonSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.polygon
 */
export declare function PolygonSeries(_props: PolygonSeriesProps): any;
export declare namespace PolygonSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Polygon;
