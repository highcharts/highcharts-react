/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2026-02-19
 *
 */
import type { DataBeforeParseCallbackFunction, DataCompleteCallbackFunction, DataParseDateCallbackFunction, DataParsedCallbackFunction, DataValueType, Dictionary } from "highcharts";

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
    parseDate?: DataParseDateCallbackFunction;
    parsed?: DataParsedCallbackFunction;
    rows?: Array<Array<DataValueType>>;
    rowsURL?: string;
    seriesMapping?: Array<Dictionary<number>>;
    startColumn?: number;
    startRow?: number;
    switchRowsAndColumns?: boolean;
    table?: string | global.HTMLElement;
};
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
