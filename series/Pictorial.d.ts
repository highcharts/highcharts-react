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
import type { SeriesPictorialOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A pictorial chart uses vector images to represents the data. The shape of
 * the data point is taken from the path parameter.
 *
 * A ready-made chart with `chart.type` set to `pictorial`. Declare the data
 * with `<Pictorial.Series>`, or use `PictorialSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Pictorial>
 *   <Pictorial.Series data={[1, 2, 3]} />
 * </Pictorial>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pictorial
 */
declare function Pictorial(props: ICommonAttributes): React.JSX.Element;
declare namespace Pictorial {
    export { PictorialSeries as Series };
    export var type: string;
}
type SeriesPictorialConfig = Omit<SeriesPictorialOptions, "type">;
/** Props for the `<PictorialSeries />` component. */
export interface PictorialSeriesProps {
    id?: SeriesPictorialConfig["id"];
    index?: SeriesPictorialConfig["index"];
    name?: SeriesPictorialConfig["name"];
    className?: SeriesPictorialConfig["className"];
    color?: SeriesPictorialConfig["color"];
    events?: SeriesPictorialConfig["events"];
    data?: SeriesPictorialConfig["data"];
    options?: SeriesPictorialConfig;
}
/**
 * A pictorial chart uses vector images to represents the data. The shape of
 * the data point is taken from the path parameter.
 *
 * Renders the `pictorial` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <PictorialSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pictorial
 */
export declare function PictorialSeries(_props: PictorialSeriesProps): any;
export declare namespace PictorialSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pictorial;
