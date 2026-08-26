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
import type { SeriesKlingerOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Klinger oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `klinger`. Declare the data with
 * `<Klinger.Series>`, or use `KlingerSeries` inside a plain `<StockChart>` to
 * combine it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <Klinger>
 *   <Klinger.Series options={{ linkedTo: 'prices' }} />
 * </Klinger>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.klinger
 */
declare function Klinger(props: ICommonAttributes): React.JSX.Element;
declare namespace Klinger {
    export { KlingerSeries as Series };
    export var type: string;
}
type SeriesKlingerConfig = Omit<SeriesKlingerOptions, "type">;
/** Props for the `<KlingerSeries />` component. */
export interface KlingerSeriesProps {
    id?: SeriesKlingerConfig["id"];
    index?: SeriesKlingerConfig["index"];
    name?: SeriesKlingerConfig["name"];
    className?: SeriesKlingerConfig["className"];
    color?: SeriesKlingerConfig["color"];
    events?: SeriesKlingerConfig["events"];
    options?: SeriesKlingerConfig;
}
/**
 * Klinger oscillator. This series requires the `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * Renders the `klinger` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <KlingerSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.klinger
 */
export declare function KlingerSeries(_props: KlingerSeriesProps): any;
export declare namespace KlingerSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Klinger;
