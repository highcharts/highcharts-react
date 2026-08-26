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
import type { SeriesKeltnerchannelsOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Keltner Channels. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`,
 * `stock/indicators/atr.js`, and `stock/ema/.js`.
 *
 * A ready-made chart with `chart.type` set to `keltnerchannels`. Declare the
 * data with `<KeltnerChannels.Series>`, or use `KeltnerChannelsSeries` inside
 * a plain `<StockChart>` to combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <KeltnerChannels>
 *   <KeltnerChannels.Series options={{ linkedTo: 'prices' }} />
 * </KeltnerChannels>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.keltnerchannels
 */
declare function KeltnerChannels(props: ICommonAttributes): React.JSX.Element;
declare namespace KeltnerChannels {
    export { KeltnerChannelsSeries as Series };
    export var type: string;
}
type SeriesKeltnerchannelsConfig = Omit<SeriesKeltnerchannelsOptions, "type">;
/** Props for the `<KeltnerChannelsSeries />` component. */
export interface KeltnerChannelsSeriesProps {
    id?: SeriesKeltnerchannelsConfig["id"];
    index?: SeriesKeltnerchannelsConfig["index"];
    name?: SeriesKeltnerchannelsConfig["name"];
    className?: SeriesKeltnerchannelsConfig["className"];
    color?: SeriesKeltnerchannelsConfig["color"];
    events?: SeriesKeltnerchannelsConfig["events"];
    options?: SeriesKeltnerchannelsConfig;
}
/**
 * Keltner Channels. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js`,
 * `stock/indicators/atr.js`, and `stock/ema/.js`.
 *
 * Renders the `keltnerchannels` series type inside a chart component. The most
 * common options are available as props, the rest goes through the `options`
 * prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <KeltnerChannelsSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.keltnerchannels
 */
export declare function KeltnerChannelsSeries(_props: KeltnerChannelsSeriesProps): any;
export declare namespace KeltnerChannelsSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default KeltnerChannels;
