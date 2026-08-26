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
import type { SeriesDumbbellOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * The dumbbell series is a cartesian series with higher and lower values for
 * each point along an X axis, connected with a line between the values.
 *
 * A ready-made chart with `chart.type` set to `dumbbell`. Declare the data
 * with `<Dumbbell.Series>`, or use `DumbbellSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Dumbbell>
 *   <Dumbbell.Series data={[1, 2, 3]} />
 * </Dumbbell>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.dumbbell
 */
declare function Dumbbell(props: ICommonAttributes): React.JSX.Element;
declare namespace Dumbbell {
    export { DumbbellSeries as Series };
    export var type: string;
}
type SeriesDumbbellConfig = Omit<SeriesDumbbellOptions, "type">;
/** Props for the `<DumbbellSeries />` component. */
export interface DumbbellSeriesProps {
    id?: SeriesDumbbellConfig["id"];
    index?: SeriesDumbbellConfig["index"];
    name?: SeriesDumbbellConfig["name"];
    className?: SeriesDumbbellConfig["className"];
    color?: SeriesDumbbellConfig["color"];
    events?: SeriesDumbbellConfig["events"];
    data?: SeriesDumbbellConfig["data"];
    options?: SeriesDumbbellConfig;
}
/**
 * The dumbbell series is a cartesian series with higher and lower values for
 * each point along an X axis, connected with a line between the values.
 *
 * Renders the `dumbbell` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <DumbbellSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.dumbbell
 */
export declare function DumbbellSeries(_props: DumbbellSeriesProps): any;
export declare namespace DumbbellSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Dumbbell;
