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
import type { SeriesGaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Gauges are circular plots displaying one or more values with a dial pointing
 * to values along the perimeter.
 *
 * A ready-made chart with `chart.type` set to `gauge`. Declare the data with
 * `<Gauge.Series>`, or use `GaugeSeries` inside a plain `<Chart>` to combine
 * it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <Gauge>
 *   <Gauge.Series data={[1, 2, 3]} />
 * </Gauge>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.gauge
 */
declare function Gauge(props: ICommonAttributes): React.JSX.Element;
declare namespace Gauge {
    export { GaugeSeries as Series };
    export var type: string;
}
type SeriesGaugeConfig = Omit<SeriesGaugeOptions, "type">;
/** Props for the `<GaugeSeries />` component. */
export interface GaugeSeriesProps {
    id?: SeriesGaugeConfig["id"];
    index?: SeriesGaugeConfig["index"];
    name?: SeriesGaugeConfig["name"];
    className?: SeriesGaugeConfig["className"];
    color?: SeriesGaugeConfig["color"];
    events?: SeriesGaugeConfig["events"];
    data?: SeriesGaugeConfig["data"];
    options?: SeriesGaugeConfig;
}
/**
 * Gauges are circular plots displaying one or more values with a dial pointing
 * to values along the perimeter.
 *
 * Renders the `gauge` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <GaugeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.gauge
 */
export declare function GaugeSeries(_props: GaugeSeriesProps): any;
export declare namespace GaugeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Gauge;
