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
import type { SeriesCmoOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Chande Momentum Oscillator (CMO) technical indicator. This series requires
 * the `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `cmo`. Declare the data with
 * `<CMO.Series>`, or use `CMOSeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <CMO>
 *   <CMO.Series options={{ linkedTo: 'prices' }} />
 * </CMO>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.cmo
 */
declare function CMO(props: ICommonAttributes): React.JSX.Element;
declare namespace CMO {
    export { CMOSeries as Series };
    export var type: string;
}
type SeriesCmoConfig = Omit<SeriesCmoOptions, "type">;
/** Props for the `<CMOSeries />` component. */
export interface CMOSeriesProps {
    id?: SeriesCmoConfig["id"];
    index?: SeriesCmoConfig["index"];
    name?: SeriesCmoConfig["name"];
    className?: SeriesCmoConfig["className"];
    color?: SeriesCmoConfig["color"];
    events?: SeriesCmoConfig["events"];
    options?: SeriesCmoConfig;
}
/**
 * Chande Momentum Oscillator (CMO) technical indicator. This series requires
 * the `linkedTo` option to be set and should be loaded after the
 * `stock/indicators/indicators.js` file.
 *
 * Renders the `cmo` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <CMOSeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.cmo
 */
export declare function CMOSeries(_props: CMOSeriesProps): any;
export declare namespace CMOSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default CMO;
