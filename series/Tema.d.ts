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
import type { SeriesTemaOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Tema series
 */
declare const Tema: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: TemaSeriesProps): React.JSX.Element;
    type: string;
};
interface TemaSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesTemaOptions>;
}
export default Tema;
