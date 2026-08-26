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
import type { SeriesAroonoscillatorOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";



/**
 * Aroon Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/aroon.js`.
 *
 * A ready-made chart with `chart.type` set to `aroonoscillator`. Declare the
 * data with `<AroonOscillator.Series>`, or use `AroonOscillatorSeries` inside
 * a plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <AroonOscillator>
 *   <AroonOscillator.Series options={{ linkedTo: 'prices' }} />
 * </AroonOscillator>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.aroonoscillator
 */
declare function AroonOscillator(props: ICommonAttributes): React.JSX.Element;
declare namespace AroonOscillator {
    export { AroonOscillatorSeries as Series };
    export var type: string;
}
type SeriesAroonoscillatorConfig = Omit<SeriesAroonoscillatorOptions, "type">;
/** Props for the `<AroonOscillatorSeries />` component. */
export interface AroonOscillatorSeriesProps {
    id?: SeriesAroonoscillatorConfig["id"];
    index?: SeriesAroonoscillatorConfig["index"];
    name?: SeriesAroonoscillatorConfig["name"];
    className?: SeriesAroonoscillatorConfig["className"];
    color?: SeriesAroonoscillatorConfig["color"];
    events?: SeriesAroonoscillatorConfig["events"];
    options?: SeriesAroonoscillatorConfig;
}
/**
 * Aroon Oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/aroon.js`.
 *
 * Renders the `aroonoscillator` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <AroonOscillatorSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.aroonoscillator
 */
export declare function AroonOscillatorSeries(_props: AroonOscillatorSeriesProps): any;
export declare namespace AroonOscillatorSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default AroonOscillator;
