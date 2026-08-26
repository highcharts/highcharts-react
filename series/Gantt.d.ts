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
import type { SeriesGanttOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * A `gantt` series. If the
 * [type](https://api.highcharts.com/gantt/series.gantt.type) option is not
 * specified, it is inherited from
 * [chart.type](https://api.highcharts.com/gantt/chart.type).
 *
 * A ready-made chart with `chart.type` set to `gantt`. Declare the data with
 * `<Gantt.Series>`, or use `GanttSeries` inside a plain `<GanttChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Gantt.
 *
 * @example
 * <Gantt>
 *   <Gantt.Series data={[1, 2, 3]} />
 * </Gantt>
 *
 * @see https://api.highcharts.com/gantt/plotOptions.gantt
 */
declare function Gantt(props: ICommonAttributes): React.JSX.Element;
declare namespace Gantt {
    export { GanttSeries as Series };
    export var type: string;
}
type SeriesGanttConfig = Omit<SeriesGanttOptions, "type">;
/** Props for the `<GanttSeries />` component. */
export interface GanttSeriesProps {
    id?: SeriesGanttConfig["id"];
    index?: SeriesGanttConfig["index"];
    name?: SeriesGanttConfig["name"];
    className?: SeriesGanttConfig["className"];
    color?: SeriesGanttConfig["color"];
    events?: SeriesGanttConfig["events"];
    data?: SeriesGanttConfig["data"];
    options?: SeriesGanttConfig;
}
/**
 * A `gantt` series. If the
 * [type](https://api.highcharts.com/gantt/series.gantt.type) option is not
 * specified, it is inherited from
 * [chart.type](https://api.highcharts.com/gantt/chart.type).
 *
 * Renders the `gantt` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Gantt.
 *
 * @example
 * <GanttChart>
 *   <GanttSeries data={[1, 2, 3]} />
 * </GanttChart>
 *
 * @see https://api.highcharts.com/gantt/series.gantt
 */
export declare function GanttSeries(_props: GanttSeriesProps): any;
export declare namespace GanttSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Gantt;
