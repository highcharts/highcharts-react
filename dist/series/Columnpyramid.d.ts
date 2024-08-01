/**
 * react integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-08-01
 *
 */
import React from "react";
import { ICommonAttributes, ICommonSeriesAttributes } from "../Highcharts";
/**
 * Columnpyramid series
 */
declare const Columnpyramid: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: ICommonSeriesAttributes): React.JSX.Element;
    type: string;
};
export default Columnpyramid;
