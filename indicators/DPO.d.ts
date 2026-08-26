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
import type { SeriesDpoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Detrended Price Oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * A ready-made chart with `chart.type` set to `dpo`. Declare the data with
 * `<DPO.Series>`, or use `DPOSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <DPO>
 *   <DPO.Series options={{ linkedTo: 'prices' }} />
 * </DPO>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.dpo
 */
declare function DPO(props: ICommonAttributes): React.JSX.Element;
declare namespace DPO {
    export { DPOSeries as Series };
    export var type: string;
}
type SeriesDpoConfig = Omit<SeriesDpoOptions, "type">;
/** Props for the `<DPOSeries />` component. */
export interface DPOSeriesProps {
    id?: SeriesDpoConfig["id"];
    index?: SeriesDpoConfig["index"];
    name?: SeriesDpoConfig["name"];
    className?: SeriesDpoConfig["className"];
    color?: SeriesDpoConfig["color"];
    events?: SeriesDpoConfig["events"];
    options?: SeriesDpoConfig;
}
/**
 * Detrended Price Oscillator. This series requires the `linkedTo` option to be
 * set and should be loaded after the `stock/indicators/indicators.js`.
 *
 * Renders the `dpo` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <DPOSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.dpo
 */
export declare function DPOSeries(_props: DPOSeriesProps): any;
export declare namespace DPOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DPO;
