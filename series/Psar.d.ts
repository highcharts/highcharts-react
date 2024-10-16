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
import type { SeriesPsarOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Psar series
 */
declare const Psar: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: PsarSeriesProps): React.JSX.Element;
    type: string;
};
interface PsarSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesPsarOptions>;
}
export default Psar;
