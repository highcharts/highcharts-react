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
import type { SeriesDemaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Dema series
 */
declare const Dema: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: DemaSeriesProps): React.JSX.Element;
    type: string;
};
interface DemaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesDemaOptions>;
}
export default Dema;
