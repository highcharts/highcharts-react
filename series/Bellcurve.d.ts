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
import type { SeriesBellcurveOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * A bell curve is an areaspline series which represents the probability
 * density function of the normal distribution. It calculates mean and standard
 * deviation of the base series data and plots the curve according to the
 * calculated parameters.
 *
 * A ready-made chart with `chart.type` set to `bellcurve`. Declare the data
 * with `<Bellcurve.Series>`, or use `BellcurveSeries` inside a plain `<Chart>`
 * to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Bellcurve>
 *   <Bellcurve.Series />
 * </Bellcurve>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.bellcurve
 */
declare function Bellcurve(props: ICommonAttributes): React.JSX.Element;
declare namespace Bellcurve {
    export { BellcurveSeries as Series };
    export var type: string;
}
type SeriesBellcurveConfig = Omit<SeriesBellcurveOptions, "type">;
/** Props for the `<BellcurveSeries />` component. */
export interface BellcurveSeriesProps {
    id?: SeriesBellcurveConfig["id"];
    index?: SeriesBellcurveConfig["index"];
    name?: SeriesBellcurveConfig["name"];
    className?: SeriesBellcurveConfig["className"];
    color?: SeriesBellcurveConfig["color"];
    events?: SeriesBellcurveConfig["events"];
    options?: SeriesBellcurveConfig;
}
/**
 * A bell curve is an areaspline series which represents the probability
 * density function of the normal distribution. It calculates mean and standard
 * deviation of the base series data and plots the curve according to the
 * calculated parameters.
 *
 * Renders the `bellcurve` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <BellcurveSeries />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.bellcurve
 */
export declare function BellcurveSeries(_props: BellcurveSeriesProps): any;
export declare namespace BellcurveSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Bellcurve;
