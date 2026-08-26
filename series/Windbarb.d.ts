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
import type { SeriesWindbarbOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Wind barbs are a convenient way to represent wind speed and direction in one
 * graphical form. Wind direction is given by the stem direction, and wind
 * speed by the number and shape of barbs.
 *
 * A ready-made chart with `chart.type` set to `windbarb`. Declare the data
 * with `<Windbarb.Series>`, or use `WindbarbSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Windbarb>
 *   <Windbarb.Series data={[1, 2, 3]} />
 * </Windbarb>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.windbarb
 */
declare function Windbarb(props: ICommonAttributes): React.JSX.Element;
declare namespace Windbarb {
    export { WindbarbSeries as Series };
    export var type: string;
}
type SeriesWindbarbConfig = Omit<SeriesWindbarbOptions, "type">;
/** Props for the `<WindbarbSeries />` component. */
export interface WindbarbSeriesProps {
    id?: SeriesWindbarbConfig["id"];
    index?: SeriesWindbarbConfig["index"];
    name?: SeriesWindbarbConfig["name"];
    className?: SeriesWindbarbConfig["className"];
    color?: SeriesWindbarbConfig["color"];
    events?: SeriesWindbarbConfig["events"];
    data?: SeriesWindbarbConfig["data"];
    options?: SeriesWindbarbConfig;
}
/**
 * Wind barbs are a convenient way to represent wind speed and direction in one
 * graphical form. Wind direction is given by the stem direction, and wind
 * speed by the number and shape of barbs.
 *
 * Renders the `windbarb` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Stock.
 *
 * @example
 * <Chart>
 *   <WindbarbSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.windbarb
 */
export declare function WindbarbSeries(_props: WindbarbSeriesProps): any;
export declare namespace WindbarbSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Windbarb;
