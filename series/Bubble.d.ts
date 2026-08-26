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
import type { SeriesBubbleOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A bubble series is a three dimensional series type where each point renders
 * an X, Y and Z value. Each points is drawn as a bubble where the position
 * along the X and Y axes mark the X and Y values, and the size of the bubble
 * relates to the Z value.
 *
 * A ready-made chart with `chart.type` set to `bubble`. Declare the data with
 * `<Bubble.Series>`, or use `BubbleSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Bubble>
 *   <Bubble.Series data={[1, 2, 3]} />
 * </Bubble>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.bubble
 */
declare function Bubble(props: ICommonAttributes): React.JSX.Element;
declare namespace Bubble {
    export { BubbleSeries as Series };
    export var type: string;
}
type SeriesBubbleConfig = Omit<SeriesBubbleOptions, "type">;
/** Props for the `<BubbleSeries />` component. */
export interface BubbleSeriesProps {
    id?: SeriesBubbleConfig["id"];
    index?: SeriesBubbleConfig["index"];
    name?: SeriesBubbleConfig["name"];
    className?: SeriesBubbleConfig["className"];
    color?: SeriesBubbleConfig["color"];
    events?: SeriesBubbleConfig["events"];
    data?: SeriesBubbleConfig["data"];
    options?: SeriesBubbleConfig;
}
/**
 * A bubble series is a three dimensional series type where each point renders
 * an X, Y and Z value. Each points is drawn as a bubble where the position
 * along the X and Y axes mark the X and Y values, and the size of the bubble
 * relates to the Z value.
 *
 * Renders the `bubble` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <BubbleSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.bubble
 */
export declare function BubbleSeries(_props: BubbleSeriesProps): any;
export declare namespace BubbleSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Bubble;
