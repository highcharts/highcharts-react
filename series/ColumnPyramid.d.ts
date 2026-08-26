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
import type { SeriesColumnpyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Column pyramid series display one pyramid per value along an X axis. To
 * display horizontal pyramids, set
 * [chart.inverted](https://api.highcharts.com/highcharts/chart.inverted) to
 * `true`.
 *
 * A ready-made chart with `chart.type` set to `columnpyramid`. Declare the
 * data with `<ColumnPyramid.Series>`, or use `ColumnPyramidSeries` inside a
 * plain `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <ColumnPyramid>
 *   <ColumnPyramid.Series data={[1, 2, 3]} />
 * </ColumnPyramid>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.columnpyramid
 */
declare function ColumnPyramid(props: ICommonAttributes): React.JSX.Element;
declare namespace ColumnPyramid {
    export { ColumnPyramidSeries as Series };
    export var type: string;
}
type SeriesColumnpyramidConfig = Omit<SeriesColumnpyramidOptions, "type">;
/** Props for the `<ColumnPyramidSeries />` component. */
export interface ColumnPyramidSeriesProps {
    id?: SeriesColumnpyramidConfig["id"];
    index?: SeriesColumnpyramidConfig["index"];
    name?: SeriesColumnpyramidConfig["name"];
    className?: SeriesColumnpyramidConfig["className"];
    color?: SeriesColumnpyramidConfig["color"];
    events?: SeriesColumnpyramidConfig["events"];
    data?: SeriesColumnpyramidConfig["data"];
    options?: SeriesColumnpyramidConfig;
}
/**
 * Column pyramid series display one pyramid per value along an X axis. To
 * display horizontal pyramids, set
 * [chart.inverted](https://api.highcharts.com/highcharts/chart.inverted) to
 * `true`.
 *
 * Renders the `columnpyramid` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <ColumnPyramidSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.columnpyramid
 */
export declare function ColumnPyramidSeries(_props: ColumnPyramidSeriesProps): any;
export declare namespace ColumnPyramidSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ColumnPyramid;
