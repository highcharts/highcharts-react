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
import type { SeriesFunnel3dOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Funnel3d series
 */
declare const Funnel3d: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: Funnel3dSeriesProps): React.JSX.Element;
    type: string;
};
interface Funnel3dSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesFunnel3dOptions>;
}
export default Funnel3d;
