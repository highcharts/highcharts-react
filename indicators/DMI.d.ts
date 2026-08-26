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
import type { SeriesDmiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Directional Movement Index (DMI). This series requires the `linkedTo` option
 * to be set and should be loaded after the `stock/indicators/indicators.js`
 * file.
 *
 * A ready-made chart with `chart.type` set to `dmi`. Declare the data with
 * `<DMI.Series>`, or use `DMISeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <DMI>
 *   <DMI.Series options={{ linkedTo: 'prices' }} />
 * </DMI>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.dmi
 */
declare function DMI(props: ICommonAttributes): React.JSX.Element;
declare namespace DMI {
    export { DMISeries as Series };
    export var type: string;
}
type SeriesDmiConfig = Omit<SeriesDmiOptions, "type">;
/** Props for the `<DMISeries />` component. */
export interface DMISeriesProps {
    id?: SeriesDmiConfig["id"];
    index?: SeriesDmiConfig["index"];
    name?: SeriesDmiConfig["name"];
    className?: SeriesDmiConfig["className"];
    color?: SeriesDmiConfig["color"];
    events?: SeriesDmiConfig["events"];
    options?: SeriesDmiConfig;
}
/**
 * Directional Movement Index (DMI). This series requires the `linkedTo` option
 * to be set and should be loaded after the `stock/indicators/indicators.js`
 * file.
 *
 * Renders the `dmi` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <DMISeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.dmi
 */
export declare function DMISeries(_props: DMISeriesProps): any;
export declare namespace DMISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default DMI;
