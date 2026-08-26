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
import type { SeriesLollipopOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * The lollipop series is a cartesian series with a line anchored from the x
 * axis and a dot at the end to mark the value. Requires `highcharts-more.js`,
 * `modules/dumbbell.js` and `modules/lollipop.js`.
 *
 * A ready-made chart with `chart.type` set to `lollipop`. Declare the data
 * with `<Lollipop.Series>`, or use `LollipopSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Lollipop>
 *   <Lollipop.Series data={[1, 2, 3]} />
 * </Lollipop>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.lollipop
 */
declare function Lollipop(props: ICommonAttributes): React.JSX.Element;
declare namespace Lollipop {
    export { LollipopSeries as Series };
    export var type: string;
}
type SeriesLollipopConfig = Omit<SeriesLollipopOptions, "type">;
/** Props for the `<LollipopSeries />` component. */
export interface LollipopSeriesProps {
    id?: SeriesLollipopConfig["id"];
    index?: SeriesLollipopConfig["index"];
    name?: SeriesLollipopConfig["name"];
    className?: SeriesLollipopConfig["className"];
    color?: SeriesLollipopConfig["color"];
    events?: SeriesLollipopConfig["events"];
    data?: SeriesLollipopConfig["data"];
    options?: SeriesLollipopConfig;
}
/**
 * The lollipop series is a cartesian series with a line anchored from the x
 * axis and a dot at the end to mark the value. Requires `highcharts-more.js`,
 * `modules/dumbbell.js` and `modules/lollipop.js`.
 *
 * Renders the `lollipop` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <LollipopSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.lollipop
 */
export declare function LollipopSeries(_props: LollipopSeriesProps): any;
export declare namespace LollipopSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Lollipop;
