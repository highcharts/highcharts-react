/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.1.1.
 * Build stamp: 2026-10-12
 *
 */
import type { DataBeforeParseCallbackFunction, DataCompleteCallbackFunction, DataParseDateCallbackFunction, DataParsedCallbackFunction, DataValueType, Dictionary } from "highcharts";

/** Props for the `<Data />` component. */
export type DataProps = {
    beforeParse?: DataBeforeParseCallbackFunction;
    columnTypes?: Array<"string" | "number" | "float" | "date">;
    columns?: Array<Array<DataValueType>>;
    columnsURL?: string;
    complete?: DataCompleteCallbackFunction;
    csv?: string;
    csvURL?: string;
    dataRefreshRate?: number;
    dateFormat?: "YYYY/mm/dd" | "dd/mm/YYYY" | "mm/dd/YYYY" | "dd/mm/YYYY" | "dd/mm/YY" | "mm/dd/YY";
    decimalPoint?: string;
    enablePolling?: boolean;
    endColumn?: number;
    endRow?: number;
    firstRowAsNames?: boolean;
    googleAPIKey?: string;
    googleSpreadsheetKey?: string;
    googleSpreadsheetRange?: string | undefined;
    itemDelimiter?: string;
    lineDelimiter?: string;
    parseDate?: DataParseDateCallbackFunction | false;
    parsed?: DataParsedCallbackFunction;
    rows?: Array<Array<DataValueType>>;
    rowsURL?: string;
    seriesMapping?: Array<Dictionary<number>>;
    startColumn?: number;
    startRow?: number;
    switchRowsAndColumns?: boolean;
    table?: string | global.HTMLElement;
};
/**
 * The Data module provides a simplified interface for adding data to a chart
 * from sources like CVS, HTML tables or grid views. See also the [tutorial
 * article on the Data
 * module](https://www.highcharts.com/docs/working-with-data/data-module).
 *
 * Sets `data` on the parent chart. Importing the component also loads the
 * Highcharts module it needs.
 *
 * @example
 * import { Chart } from '@highcharts/react';
 * import { Data } from '@highcharts/react/modules/Data';
 *
 * <Chart>
 *   <Data csv={csvString} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/data
 */
export declare function Data(props: DataProps): any;
export declare namespace Data {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Data;
