/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-07
 *
 */
export type DataProps = {
    beforeParse?: Highcharts.DataBeforeParseCallbackFunction;
    columnTypes?: Array<"string" | "number" | "float" | "date">;
    columns?: Array<Array<Highcharts.DataValueType>>;
    columnsURL?: string;
    complete?: Highcharts.DataCompleteCallbackFunction;
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
    parseDate?: Highcharts.DataParseDateCallbackFunction;
    parsed?: Highcharts.DataParsedCallbackFunction;
    rows?: Array<Array<Highcharts.DataValueType>>;
    rowsURL?: string;
    seriesMapping?: Array<Highcharts.Dictionary<number>>;
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
