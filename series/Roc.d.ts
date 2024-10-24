/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */
import React from "react";
import type { SeriesRocOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Roc series
 */
declare const Roc: {
    (props: ICommonAttributes): React.JSX.Element;
    Series: typeof RocSeries;
    type: string;
};
interface RocSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesRocOptions>;
}
export declare function RocSeries(_props: RocSeriesProps): any;
export declare namespace RocSeries {
    var type: string;
    var defaultProps: {
        type: string;
    };
}
export default Roc;
