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
import type { SeriesAbandsOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Abands series
 */
declare const Abands: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: AbandsSeriesProps): React.JSX.Element;
    type: string;
};
interface AbandsSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesAbandsOptions>;
}
export default Abands;
