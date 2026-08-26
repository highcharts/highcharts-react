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
import type { SeriesSupertrendOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Supertrend indicator. This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/sma.js`.
 *
 * A ready-made chart with `chart.type` set to `supertrend`. Declare the data
 * with `<Supertrend.Series>`, or use `SupertrendSeries` inside a plain
 * `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Supertrend>
 *   <Supertrend.Series options={{ linkedTo: 'prices' }} />
 * </Supertrend>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.supertrend
 */
declare function Supertrend(props: ICommonAttributes): React.JSX.Element;
declare namespace Supertrend {
    export { SupertrendSeries as Series };
    export var type: string;
}
type SeriesSupertrendConfig = Omit<SeriesSupertrendOptions, "type">;
/** Props for the `<SupertrendSeries />` component. */
export interface SupertrendSeriesProps {
    id?: SeriesSupertrendConfig["id"];
    index?: SeriesSupertrendConfig["index"];
    name?: SeriesSupertrendConfig["name"];
    className?: SeriesSupertrendConfig["className"];
    color?: SeriesSupertrendConfig["color"];
    events?: SeriesSupertrendConfig["events"];
    options?: SeriesSupertrendConfig;
}
/**
 * Supertrend indicator. This series requires the `linkedTo` option to be set
 * and should be loaded after the `stock/indicators/indicators.js` and
 * `stock/indicators/sma.js`.
 *
 * Renders the `supertrend` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <SupertrendSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.supertrend
 */
export declare function SupertrendSeries(_props: SupertrendSeriesProps): any;
export declare namespace SupertrendSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Supertrend;
