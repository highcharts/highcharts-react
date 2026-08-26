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
import type { SeriesColumnrangeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * The column range is a cartesian series type with higher and lower Y values
 * along an X axis. To display horizontal bars, set
 * [chart.inverted](https://api.highcharts.com/highcharts/chart.inverted) to
 * `true`.
 *
 * A ready-made chart with `chart.type` set to `columnrange`. Declare the data
 * with `<ColumnRange.Series>`, or use `ColumnRangeSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <ColumnRange>
 *   <ColumnRange.Series data={[1, 2, 3]} />
 * </ColumnRange>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.columnrange
 */
declare function ColumnRange(props: ICommonAttributes): React.JSX.Element;
declare namespace ColumnRange {
    export { ColumnRangeSeries as Series };
    export var type: string;
}
type SeriesColumnrangeConfig = Omit<SeriesColumnrangeOptions, "type">;
/** Props for the `<ColumnRangeSeries />` component. */
export interface ColumnRangeSeriesProps {
    id?: SeriesColumnrangeConfig["id"];
    index?: SeriesColumnrangeConfig["index"];
    name?: SeriesColumnrangeConfig["name"];
    className?: SeriesColumnrangeConfig["className"];
    color?: SeriesColumnrangeConfig["color"];
    events?: SeriesColumnrangeConfig["events"];
    data?: SeriesColumnrangeConfig["data"];
    options?: SeriesColumnrangeConfig;
}
/**
 * The column range is a cartesian series type with higher and lower Y values
 * along an X axis. To display horizontal bars, set
 * [chart.inverted](https://api.highcharts.com/highcharts/chart.inverted) to
 * `true`.
 *
 * Renders the `columnrange` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <ColumnRangeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.columnrange
 */
export declare function ColumnRangeSeries(_props: ColumnRangeSeriesProps): any;
export declare namespace ColumnRangeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default ColumnRange;
