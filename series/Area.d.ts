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
import type { SeriesAreaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * The area series type.
 *
 * A ready-made chart with `chart.type` set to `area`. Declare the data with
 * `<Area.Series>`, or use `AreaSeries` inside a plain `<Chart>` to combine it
 * with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Area>
 *   <Area.Series data={[1, 2, 3]} />
 * </Area>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.area
 */
declare function Area(props: ICommonAttributes): React.JSX.Element;
declare namespace Area {
    export { AreaSeries as Series };
    export var type: string;
}
type SeriesAreaConfig = Omit<SeriesAreaOptions, "type">;
/** Props for the `<AreaSeries />` component. */
export interface AreaSeriesProps {
    id?: SeriesAreaConfig["id"];
    index?: SeriesAreaConfig["index"];
    name?: SeriesAreaConfig["name"];
    className?: SeriesAreaConfig["className"];
    color?: SeriesAreaConfig["color"];
    events?: SeriesAreaConfig["events"];
    data?: SeriesAreaConfig["data"];
    options?: SeriesAreaConfig;
}
/**
 * The area series type.
 *
 * Renders the `area` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <AreaSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.area
 */
export declare function AreaSeries(_props: AreaSeriesProps): any;
export declare namespace AreaSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Area;
