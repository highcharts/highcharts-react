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
import type { SeriesContourOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * A contour plot is a graphical representation of three-dimensional data
 *
 * A ready-made chart with `chart.type` set to `contour`. Declare the data with
 * `<Contour.Series>`, or use `ContourSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Contour>
 *   <Contour.Series data={[1, 2, 3]} />
 * </Contour>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.contour
 */
declare function Contour(props: ICommonAttributes): React.JSX.Element;
declare namespace Contour {
    export { ContourSeries as Series };
    export var type: string;
}
type SeriesContourConfig = Omit<SeriesContourOptions, "type">;
/** Props for the `<ContourSeries />` component. */
export interface ContourSeriesProps {
    id?: SeriesContourConfig["id"];
    index?: SeriesContourConfig["index"];
    name?: SeriesContourConfig["name"];
    className?: SeriesContourConfig["className"];
    color?: SeriesContourConfig["color"];
    events?: SeriesContourConfig["events"];
    data?: SeriesContourConfig["data"];
    options?: SeriesContourConfig;
}
/**
 * A contour plot is a graphical representation of three-dimensional data
 *
 * Renders the `contour` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts, Highcharts Maps.
 *
 * @example
 * <Chart>
 *   <ContourSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.contour
 */
export declare function ContourSeries(_props: ContourSeriesProps): any;
export declare namespace ContourSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Contour;
