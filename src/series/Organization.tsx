/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-28
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesOrganizationOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Organization/OrganizationSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Organization series
 */
const Organization = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "organization",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart title={props.title} chartConstructor="chart" options={chartConfig}>
      {props.children}
    </Chart>
  );
};

interface OrganizationSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesOrganizationOptions>;
  children?: React.ReactNode;
}

export function OrganizationSeries(_props: OrganizationSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
OrganizationSeries.type = "Series";
Organization.Series = OrganizationSeries;

OrganizationSeries._HCReact = {
  type: "Series",
  HC_Option: "series.organization",
  childOption: "series.organization",
};

// TODO: Fix typings
// @ts-ignore:
OrganizationSeries.defaultProps = {
  type: "organization",
};

Organization.type = "SeriesChart";
export default Organization;
