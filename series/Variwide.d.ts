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
import type { SeriesVariwideOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A variwide chart (related to marimekko chart) is a column chart with a
 * variable width expressing a third dimension.
 *
 * A ready-made chart with `chart.type` set to `variwide`. Declare the data
 * with `<Variwide.Series>`, or use `VariwideSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Variwide>
 *   <Variwide.Series data={[1, 2, 3]} />
 * </Variwide>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.variwide
 */
declare function Variwide(props: ICommonAttributes): React.JSX.Element;
declare namespace Variwide {
    export { VariwideSeries as Series };
    export var type: string;
}
type SeriesVariwideConfig = Omit<SeriesVariwideOptions, "type">;
/** Props for the `<VariwideSeries />` component. */
export interface VariwideSeriesProps {
    id?: SeriesVariwideConfig["id"];
    index?: SeriesVariwideConfig["index"];
    name?: SeriesVariwideConfig["name"];
    className?: SeriesVariwideConfig["className"];
    color?: SeriesVariwideConfig["color"];
    events?: SeriesVariwideConfig["events"];
    data?: SeriesVariwideConfig["data"];
    options?: SeriesVariwideConfig;
}
/**
 * A variwide chart (related to marimekko chart) is a column chart with a
 * variable width expressing a third dimension.
 *
 * Renders the `variwide` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <VariwideSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.variwide
 */
export declare function VariwideSeries(_props: VariwideSeriesProps): any;
export declare namespace VariwideSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Variwide;
