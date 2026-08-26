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
import type { SeriesSunburstOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A Sunburst displays hierarchical data, where a level in the hierarchy is
 * represented by a circle. The center represents the root node of the tree.
 * The visualization bears a resemblance to both treemap and pie charts.
 *
 * A ready-made chart with `chart.type` set to `sunburst`. Declare the data
 * with `<Sunburst.Series>`, or use `SunburstSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Sunburst>
 *   <Sunburst.Series data={[1, 2, 3]} />
 * </Sunburst>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.sunburst
 */
declare function Sunburst(props: ICommonAttributes): React.JSX.Element;
declare namespace Sunburst {
    export { SunburstSeries as Series };
    export var type: string;
}
type SeriesSunburstConfig = Omit<SeriesSunburstOptions, "type">;
/** Props for the `<SunburstSeries />` component. */
export interface SunburstSeriesProps {
    id?: SeriesSunburstConfig["id"];
    index?: SeriesSunburstConfig["index"];
    name?: SeriesSunburstConfig["name"];
    className?: SeriesSunburstConfig["className"];
    color?: SeriesSunburstConfig["color"];
    events?: SeriesSunburstConfig["events"];
    data?: SeriesSunburstConfig["data"];
    options?: SeriesSunburstConfig;
}
/**
 * A Sunburst displays hierarchical data, where a level in the hierarchy is
 * represented by a circle. The center represents the root node of the tree.
 * The visualization bears a resemblance to both treemap and pie charts.
 *
 * Renders the `sunburst` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <SunburstSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.sunburst
 */
export declare function SunburstSeries(_props: SunburstSeriesProps): any;
export declare namespace SunburstSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Sunburst;
