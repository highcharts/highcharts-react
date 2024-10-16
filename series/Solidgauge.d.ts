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
import type { SeriesSolidgaugeOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Solidgauge series
 */
declare const Solidgauge: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: SolidgaugeSeriesProps): React.JSX.Element;
    type: string;
};
interface SolidgaugeSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesSolidgaugeOptions>;
}
export default Solidgauge;
