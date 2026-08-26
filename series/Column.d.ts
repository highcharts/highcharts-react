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
import type { SeriesColumnOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Column series display one column per value along an X axis.
 *
 * A ready-made chart with `chart.type` set to `column`. Declare the data with
 * `<Column.Series>`, or use `ColumnSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Column>
 *   <Column.Series data={[1, 2, 3]} />
 * </Column>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.column
 */
declare function Column(props: ICommonAttributes): React.JSX.Element;
declare namespace Column {
    export { ColumnSeries as Series };
    export var type: string;
}
type SeriesColumnConfig = Omit<SeriesColumnOptions, "type">;
/** Props for the `<ColumnSeries />` component. */
export interface ColumnSeriesProps {
    id?: SeriesColumnConfig["id"];
    index?: SeriesColumnConfig["index"];
    name?: SeriesColumnConfig["name"];
    className?: SeriesColumnConfig["className"];
    color?: SeriesColumnConfig["color"];
    events?: SeriesColumnConfig["events"];
    data?: SeriesColumnConfig["data"];
    options?: SeriesColumnConfig;
}
/**
 * Column series display one column per value along an X axis.
 *
 * Renders the `column` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <ColumnSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.column
 */
export declare function ColumnSeries(_props: ColumnSeriesProps): any;
export declare namespace ColumnSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Column;
