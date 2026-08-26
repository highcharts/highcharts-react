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
import type { SeriesVectorOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A vector plot is a type of cartesian chart where each point has an X and Y
 * position, a length and a direction. Vectors are drawn as arrows.
 *
 * A ready-made chart with `chart.type` set to `vector`. Declare the data with
 * `<Vector.Series>`, or use `VectorSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Vector>
 *   <Vector.Series data={[1, 2, 3]} />
 * </Vector>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.vector
 */
declare function Vector(props: ICommonAttributes): React.JSX.Element;
declare namespace Vector {
    export { VectorSeries as Series };
    export var type: string;
}
type SeriesVectorConfig = Omit<SeriesVectorOptions, "type">;
/** Props for the `<VectorSeries />` component. */
export interface VectorSeriesProps {
    id?: SeriesVectorConfig["id"];
    index?: SeriesVectorConfig["index"];
    name?: SeriesVectorConfig["name"];
    className?: SeriesVectorConfig["className"];
    color?: SeriesVectorConfig["color"];
    events?: SeriesVectorConfig["events"];
    data?: SeriesVectorConfig["data"];
    options?: SeriesVectorConfig;
}
/**
 * A vector plot is a type of cartesian chart where each point has an X and Y
 * position, a length and a direction. Vectors are drawn as arrows.
 *
 * Renders the `vector` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <VectorSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.vector
 */
export declare function VectorSeries(_props: VectorSeriesProps): any;
export declare namespace VectorSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Vector;
