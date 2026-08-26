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
import type { SeriesSolidgaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * A solid gauge is a circular gauge where the value is indicated by a filled
 * arc, and the color of the arc may variate with the value.
 *
 * A ready-made chart with `chart.type` set to `solidgauge`. Declare the data
 * with `<SolidGauge.Series>`, or use `SolidGaugeSeries` inside a plain
 * `<Chart>` to combine it with other series types.
 *
 * Available in Highcharts.
 *
 * @example
 * <SolidGauge>
 *   <SolidGauge.Series data={[1, 2, 3]} />
 * </SolidGauge>
 *
 * @see https://api.highcharts.com/highcharts/plotOptions.solidgauge
 */
declare function SolidGauge(props: ICommonAttributes): React.JSX.Element;
declare namespace SolidGauge {
    export { SolidGaugeSeries as Series };
    export var type: string;
}
type SeriesSolidgaugeConfig = Omit<SeriesSolidgaugeOptions, "type">;
/** Props for the `<SolidGaugeSeries />` component. */
export interface SolidGaugeSeriesProps {
    id?: SeriesSolidgaugeConfig["id"];
    index?: SeriesSolidgaugeConfig["index"];
    name?: SeriesSolidgaugeConfig["name"];
    className?: SeriesSolidgaugeConfig["className"];
    color?: SeriesSolidgaugeConfig["color"];
    events?: SeriesSolidgaugeConfig["events"];
    data?: SeriesSolidgaugeConfig["data"];
    options?: SeriesSolidgaugeConfig;
}
/**
 * A solid gauge is a circular gauge where the value is indicated by a filled
 * arc, and the color of the arc may variate with the value.
 *
 * Renders the `solidgauge` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts.
 *
 * @example
 * <Chart>
 *   <SolidGaugeSeries data={[1, 2, 3]} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/series.solidgauge
 */
export declare function SolidGaugeSeries(_props: SolidGaugeSeriesProps): any;
export declare namespace SolidGaugeSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default SolidGauge;
