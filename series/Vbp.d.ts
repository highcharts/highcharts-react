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
import type { SeriesVbpOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Vbp series
 */
declare const Vbp: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: VbpSeriesProps): React.JSX.Element;
    type: string;
};
interface VbpSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesVbpOptions>;
}
export default Vbp;
