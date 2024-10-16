/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-15
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
    Series(_props: RocSeriesProps): React.JSX.Element;
    type: string;
};
interface RocSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesRocOptions>;
}
export default Roc;
