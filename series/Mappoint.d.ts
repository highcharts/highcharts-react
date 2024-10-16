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
import type { SeriesMappointOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Mappoint series
 */
declare const Mappoint: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: MappointSeriesProps): React.JSX.Element;
    type: string;
};
interface MappointSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesMappointOptions>;
}
export default Mappoint;
