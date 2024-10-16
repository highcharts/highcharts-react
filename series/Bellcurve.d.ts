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
import type { SeriesBellcurveOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Bellcurve series
 */
declare const Bellcurve: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: BellcurveSeriesProps): React.JSX.Element;
    type: string;
};
interface BellcurveSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesBellcurveOptions>;
}
export default Bellcurve;
