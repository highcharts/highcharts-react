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
import type { SeriesPriceenvelopesOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Price envelopes indicator based on
 * [SMA](https://api.highcharts.com/highstock/plotOptions.sma) calculations.
 * This series requires the `linkedTo` option to be set and should be loaded
 * after the `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `priceenvelopes`. Declare the
 * data with `<PriceEnvelopes.Series>`, or use `PriceEnvelopesSeries` inside a
 * plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <PriceEnvelopes>
 *   <PriceEnvelopes.Series options={{ linkedTo: 'prices' }} />
 * </PriceEnvelopes>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.priceenvelopes
 */
declare function PriceEnvelopes(props: ICommonAttributes): React.JSX.Element;
declare namespace PriceEnvelopes {
    export { PriceEnvelopesSeries as Series };
    export var type: string;
}
type SeriesPriceenvelopesConfig = Omit<SeriesPriceenvelopesOptions, "type">;
/** Props for the `<PriceEnvelopesSeries />` component. */
export interface PriceEnvelopesSeriesProps {
    id?: SeriesPriceenvelopesConfig["id"];
    index?: SeriesPriceenvelopesConfig["index"];
    name?: SeriesPriceenvelopesConfig["name"];
    className?: SeriesPriceenvelopesConfig["className"];
    color?: SeriesPriceenvelopesConfig["color"];
    events?: SeriesPriceenvelopesConfig["events"];
    options?: SeriesPriceenvelopesConfig;
}
/**
 * Price envelopes indicator based on
 * [SMA](https://api.highcharts.com/highstock/plotOptions.sma) calculations.
 * This series requires the `linkedTo` option to be set and should be loaded
 * after the `stock/indicators/indicators.js` file.
 *
 * Renders the `priceenvelopes` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <PriceEnvelopesSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.priceenvelopes
 */
export declare function PriceEnvelopesSeries(_props: PriceEnvelopesSeriesProps): any;
export declare namespace PriceEnvelopesSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default PriceEnvelopes;
