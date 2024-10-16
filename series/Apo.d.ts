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
import type { SeriesApoOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Apo series
 */
declare const Apo: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: ApoSeriesProps): React.JSX.Element;
    type: string;
};
interface ApoSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesApoOptions>;
}
export default Apo;
