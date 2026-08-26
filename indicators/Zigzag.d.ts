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
import type { SeriesZigzagOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Zig Zag indicator.
 *
 * A ready-made chart with `chart.type` set to `zigzag`. Declare the data with
 * `<Zigzag.Series>`, or use `ZigzagSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Zigzag>
 *   <Zigzag.Series options={{ linkedTo: 'prices' }} />
 * </Zigzag>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.zigzag
 */
declare function Zigzag(props: ICommonAttributes): React.JSX.Element;
declare namespace Zigzag {
    export { ZigzagSeries as Series };
    export var type: string;
}
type SeriesZigzagConfig = Omit<SeriesZigzagOptions, "type">;
/** Props for the `<ZigzagSeries />` component. */
export interface ZigzagSeriesProps {
    id?: SeriesZigzagConfig["id"];
    index?: SeriesZigzagConfig["index"];
    name?: SeriesZigzagConfig["name"];
    className?: SeriesZigzagConfig["className"];
    color?: SeriesZigzagConfig["color"];
    events?: SeriesZigzagConfig["events"];
    options?: SeriesZigzagConfig;
}
/**
 * Zig Zag indicator.
 *
 * Renders the `zigzag` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <ZigzagSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.zigzag
 */
export declare function ZigzagSeries(_props: ZigzagSeriesProps): any;
export declare namespace ZigzagSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Zigzag;
