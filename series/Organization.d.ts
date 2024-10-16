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
import type { SeriesOrganizationOptions } from "highcharts/highcharts";
import type { ICommonAttributes, ICommonSeriesAttributes, WithoutType } from "../Highcharts";
/**
 * Organization series
 */
declare const Organization: {
    (props: ICommonAttributes): React.JSX.Element;
    Series(_props: OrganizationSeriesProps): React.JSX.Element;
    type: string;
};
interface OrganizationSeriesProps extends ICommonSeriesAttributes {
    options?: WithoutType<SeriesOrganizationOptions>;
}
export default Organization;
