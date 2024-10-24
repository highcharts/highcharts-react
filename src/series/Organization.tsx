/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-24
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesOrganizationOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Organization/OrganizationSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="chart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface OrganizationSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesOrganizationOptions>;
}

export function OrganizationSeries(_props: OrganizationSeriesProps) {
  return null;
}

OrganizationSeries.type = "Series";
Organization.Series = OrganizationSeries;

// TODO: Fix typings
// @ts-ignore:
OrganizationSeries.defaultProps = {
  type: "organization",
};

Organization.type = "SeriesChart";
export default Organization;
