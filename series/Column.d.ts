/**
 * React integration.
 * Copyright (c) 2026, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v13.0.0.
 * Build stamp: 2026-06-30
 *
 */
import React from "react";
import type { SeriesColumnOptions } from "highcharts/highcharts";
import type { ICommonAttributes } from "../Highcharts";
/**
 * Column series
 */
declare const Column: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof ColumnSeries;
    type: string;
};
type SeriesColumnConfig = Omit<SeriesColumnOptions, "type">;
export interface ColumnSeriesProps {
    id?: SeriesColumnConfig["id"];
    index?: SeriesColumnConfig["index"];
    name?: SeriesColumnConfig["name"];
    className?: SeriesColumnConfig["className"];
    color?: SeriesColumnConfig["color"];
    events?: SeriesColumnConfig["events"];
    data?: SeriesColumnConfig["data"];
    options?: SeriesColumnConfig;
}
export declare function ColumnSeries(_props: ColumnSeriesProps): any;
export declare namespace ColumnSeries {
    var type: string;
    var _HCReact: {
        type: string;
        HCOption: string;
        childOption: string;
    };
}
export default Column;
