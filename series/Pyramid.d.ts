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
import type { SeriesPyramidOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A pyramid series is a special type of funnel, without neck and reversed by
 * default.
 *
 * A ready-made chart with `chart.type` set to `pyramid`. Declare the data with
 * `<Pyramid.Series>`, or use `PyramidSeries` inside a plain `<Chart>` to
 * combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Pyramid>
 *   <Pyramid.Series data={[1, 2, 3]} />
 * </Pyramid>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.pyramid
 */
declare function Pyramid(props: ICommonAttributes): React.JSX.Element;
declare namespace Pyramid {
    export { PyramidSeries as Series };
    export var type: string;
}
type SeriesPyramidConfig = Omit<SeriesPyramidOptions, "type">;
/** Props for the `<PyramidSeries />` component. */
export interface PyramidSeriesProps {
    id?: SeriesPyramidConfig["id"];
    index?: SeriesPyramidConfig["index"];
    name?: SeriesPyramidConfig["name"];
    className?: SeriesPyramidConfig["className"];
    color?: SeriesPyramidConfig["color"];
    events?: SeriesPyramidConfig["events"];
    data?: SeriesPyramidConfig["data"];
    options?: SeriesPyramidConfig;
}
/**
 * A pyramid series is a special type of funnel, without neck and reversed by
 * default.
 *
 * Renders the `pyramid` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <PyramidSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.pyramid
 */
export declare function PyramidSeries(_props: PyramidSeriesProps): any;
export declare namespace PyramidSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Pyramid;
