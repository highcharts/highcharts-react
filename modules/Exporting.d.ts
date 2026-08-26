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



/** Props for the `<Exporting />` component. */
export type ExportingProps = {
    accessibility?: {
        enabled?: boolean;
    };
    allowHTML?: boolean;
    allowTableSorting?: boolean;
    applyStyleSheets?: boolean;
    chartOptions?: Highcharts.Options;
    csv?: {
        annotations?: {
            itemDelimiter?: string;
            join?: boolean;
        };
        columnHeaderFormatter?: Function | null;
        dateFormat?: string;
        decimalPoint?: string | null;
        itemDelimiter?: string | null;
        lineDelimiter?: string;
    };
    enabled?: boolean;
    error?: Highcharts.ExportingErrorCallbackFunction;
    fallbackToExportServer?: boolean;
    fetchOptions?: Object;
    filename?: string;
    libURL?: string;
    local?: boolean;
    menuItemDefinitions?: Highcharts.Dictionary<Highcharts.ExportingMenuObject>;
    pdfFont?: {
        bold?: string | undefined;
        bolditalic?: string | undefined;
        italic?: string | undefined;
        normal?: string | undefined;
    };
    printMaxWidth?: number;
    scale?: number;
    showExportInProgress?: boolean;
    showTable?: boolean;
    sourceHeight?: number;
    sourceWidth?: number;
    tableCaption?: boolean | string;
    type?: Highcharts.ExportingMimeTypeValue;
    useMultiLevelHeaders?: boolean;
    useRowspanHeaders?: boolean;
    width?: number;
};
/**
 * Options for the exporting module. For an overview on the matter, see [the
 * docs](https://www.highcharts.com/docs/export-module/export-module-overview)
 * and read our [Fair Usage
 * Policy](https://www.highcharts.com/docs/export-module/privacy-disclaimer-export).
 *
 * Sets `exporting` on the parent chart. Importing the component also loads the
 * Highcharts module it needs.
 *
 * @example
 * <Chart>
 *   <Exporting filename="sales-report" />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/exporting
 */
export declare function Exporting(props: ExportingProps): any;
export declare namespace Exporting {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default Exporting;
