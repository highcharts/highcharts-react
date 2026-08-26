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
/** Props for the `<DataTable />` component. */
export type DataTableProps = {
    columns?: Highcharts.DataTableColumnCollection | undefined;
    id?: string | undefined;
};
/**
 * Options for one or many chart-level data tables. The `dataTable` option, or
 * its array members, can be either configuration objects or instances of the
 * `DataTable` class. If a `DataTable` instance is passed, it will be used
 * directly. If a configuration object is passed, a new `DataTable` instance
 * will be created based on the provided configuration.
 *
 * Sets `dataTable` on the parent chart. Several may be declared.
 *
 * @example
 * <Chart>
 *   <DataTable columns={{ x: [1, 2, 3], y: [4, 5, 6] }} />
 * </Chart>
 *
 * @see https://api.highcharts.com/highcharts/dataTable
 */
export declare function DataTable(props: DataTableProps): any;
export declare namespace DataTable {
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
        defaultOptions: any;
        isArrayType: boolean;
    };
}
export default DataTable;
