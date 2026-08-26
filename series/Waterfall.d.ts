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
import type { SeriesWaterfallOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A waterfall chart displays sequentially introduced positive or negative
 * values in cumulative columns.
 *
 * A ready-made chart with `chart.type` set to `waterfall`. Declare the data
 * with `<Waterfall.Series>`, or use `WaterfallSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Waterfall>
 *   <Waterfall.Series data={[1, 2, 3]} />
 * </Waterfall>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.waterfall
 */
declare function Waterfall(props: ICommonAttributes): React.JSX.Element;
declare namespace Waterfall {
    export { WaterfallSeries as Series };
    export var type: string;
}
type SeriesWaterfallConfig = Omit<SeriesWaterfallOptions, "type">;
/** Props for the `<WaterfallSeries />` component. */
export interface WaterfallSeriesProps {
    id?: SeriesWaterfallConfig["id"];
    index?: SeriesWaterfallConfig["index"];
    name?: SeriesWaterfallConfig["name"];
    className?: SeriesWaterfallConfig["className"];
    color?: SeriesWaterfallConfig["color"];
    events?: SeriesWaterfallConfig["events"];
    data?: SeriesWaterfallConfig["data"];
    options?: SeriesWaterfallConfig;
}
/**
 * A waterfall chart displays sequentially introduced positive or negative
 * values in cumulative columns.
 *
 * Renders the `waterfall` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <WaterfallSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.waterfall
 */
export declare function WaterfallSeries(_props: WaterfallSeriesProps): any;
export declare namespace WaterfallSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Waterfall;
