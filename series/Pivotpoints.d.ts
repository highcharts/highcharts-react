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
import type { SeriesPivotpointsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Pivotpoints series
 */
declare const Pivotpoints: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: PivotpointsSeriesProps): React.JSX.Element;
    type: string;
};
interface PivotpointsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPivotpointsOptions>;
}
export default Pivotpoints;
