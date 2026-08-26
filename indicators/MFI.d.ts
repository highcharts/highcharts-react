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
import type { SeriesMfiOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Money Flow Index. This series requires `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * A ready-made chart with `chart.type` set to `mfi`. Declare the data with
 * `<MFI.Series>`, or use `MFISeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <MFI>
 *   <MFI.Series options={{ linkedTo: 'prices' }} />
 * </MFI>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.mfi
 */
declare function MFI(props: ICommonAttributes): React.JSX.Element;
declare namespace MFI {
    export { MFISeries as Series };
    export var type: string;
}
type SeriesMfiConfig = Omit<SeriesMfiOptions, "type">;
/** Props for the `<MFISeries />` component. */
export interface MFISeriesProps {
    id?: SeriesMfiConfig["id"];
    index?: SeriesMfiConfig["index"];
    name?: SeriesMfiConfig["name"];
    className?: SeriesMfiConfig["className"];
    color?: SeriesMfiConfig["color"];
    events?: SeriesMfiConfig["events"];
    options?: SeriesMfiConfig;
}
/**
 * Money Flow Index. This series requires `linkedTo` option to be set and
 * should be loaded after the `stock/indicators/indicators.js` file.
 *
 * Renders the `mfi` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <MFISeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.mfi
 */
export declare function MFISeries(_props: MFISeriesProps): any;
export declare namespace MFISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default MFI;
