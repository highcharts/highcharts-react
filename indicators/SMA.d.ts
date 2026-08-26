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
import type { SeriesSmaOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";

/**
 * Simple moving average indicator (SMA). This series requires `linkedTo`
 * option to be set.
 *
 * A ready-made chart with `chart.type` set to `sma`. Declare the data with
 * `<SMA.Series>`, or use `SMASeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <SMA>
 *   <SMA.Series options={{ linkedTo: 'prices' }} />
 * </SMA>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.sma
 */
declare function SMA(props: ICommonAttributes): React.JSX.Element;
declare namespace SMA {
    export { SMASeries as Series };
    export var type: string;
}
type SeriesSmaConfig = Omit<SeriesSmaOptions, "type">;
/** Props for the `<SMASeries />` component. */
export interface SMASeriesProps {
    id?: SeriesSmaConfig["id"];
    index?: SeriesSmaConfig["index"];
    name?: SeriesSmaConfig["name"];
    className?: SeriesSmaConfig["className"];
    color?: SeriesSmaConfig["color"];
    events?: SeriesSmaConfig["events"];
    options?: SeriesSmaConfig;
}
/**
 * Simple moving average indicator (SMA). This series requires `linkedTo`
 * option to be set.
 *
 * Renders the `sma` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <SMASeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.sma
 */
export declare function SMASeries(_props: SMASeriesProps): any;
export declare namespace SMASeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default SMA;
