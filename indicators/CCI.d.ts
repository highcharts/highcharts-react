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
import type { SeriesCciOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";


/**
 * Commodity Channel Index (CCI). This series requires `linkedTo` option to be
 * set.
 *
 * A ready-made chart with `chart.type` set to `cci`. Declare the data with
 * `<CCI.Series>`, or use `CCISeries` inside a plain `<StockChart>` to combine
 * it with other series types.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <CCI>
 *   <CCI.Series options={{ linkedTo: 'prices' }} />
 * </CCI>
 *
 * @see https://api.highcharts.com/highstock/plotOptions.cci
 */
declare function CCI(props: ICommonAttributes): React.JSX.Element;
declare namespace CCI {
    export { CCISeries as Series };
    export var type: string;
}
type SeriesCciConfig = Omit<SeriesCciOptions, "type">;
/** Props for the `<CCISeries />` component. */
export interface CCISeriesProps {
    id?: SeriesCciConfig["id"];
    index?: SeriesCciConfig["index"];
    name?: SeriesCciConfig["name"];
    className?: SeriesCciConfig["className"];
    color?: SeriesCciConfig["color"];
    events?: SeriesCciConfig["events"];
    options?: SeriesCciConfig;
}
/**
 * Commodity Channel Index (CCI). This series requires `linkedTo` option to be
 * set.
 *
 * Renders the `cci` series type inside a chart component. The most common
 * options are available as props, the rest goes through the `options` prop.
 *
 * Available in Highcharts Stock.
 *
 * @example
 * <StockChart>
 *   <CCISeries options={{ linkedTo: 'prices' }} />
 * </StockChart>
 *
 * @see https://api.highcharts.com/highstock/series.cci
 */
export declare function CCISeries(_props: CCISeriesProps): any;
export declare namespace CCISeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default CCI;
