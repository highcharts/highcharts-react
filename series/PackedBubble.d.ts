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
import type { SeriesPackedbubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A packed bubble series is a two dimensional series type, where each point
 * renders a value in X, Y position. Each point is drawn as a bubble where the
 * bubbles don't overlap with each other and the radius of the bubble relates
 * to the value.
 *
 * A ready-made chart with `chart.type` set to `packedbubble`. Declare the data
 * with `<PackedBubble.Series>`, or use `PackedBubbleSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <PackedBubble>
 *   <PackedBubble.Series data={[1, 2, 3]} />
 * </PackedBubble>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.packedbubble
 */
declare function PackedBubble(props: ICommonAttributes): React.JSX.Element;
declare namespace PackedBubble {
    export { PackedBubbleSeries as Series };
    export var type: string;
}
type SeriesPackedbubbleConfig = Omit<SeriesPackedbubbleOptions, "type">;
/** Props for the `<PackedBubbleSeries />` component. */
export interface PackedBubbleSeriesProps {
    id?: SeriesPackedbubbleConfig["id"];
    index?: SeriesPackedbubbleConfig["index"];
    name?: SeriesPackedbubbleConfig["name"];
    className?: SeriesPackedbubbleConfig["className"];
    color?: SeriesPackedbubbleConfig["color"];
    events?: SeriesPackedbubbleConfig["events"];
    data?: SeriesPackedbubbleConfig["data"];
    options?: SeriesPackedbubbleConfig;
}
/**
 * A packed bubble series is a two dimensional series type, where each point
 * renders a value in X, Y position. Each point is drawn as a bubble where the
 * bubbles don't overlap with each other and the radius of the bubble relates
 * to the value.
 *
 * Renders the `packedbubble` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <PackedBubbleSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.packedbubble
 */
export declare function PackedBubbleSeries(_props: PackedBubbleSeriesProps): any;
export declare namespace PackedBubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PackedBubble;
