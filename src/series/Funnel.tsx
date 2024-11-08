/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-11-08
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesFunnelOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Series/Funnel/FunnelSeries.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Funnel series
 */
const Funnel = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "funnel",
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

interface FunnelSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesFunnelOptions>;
}

export function FunnelSeries(_props: FunnelSeriesProps) {
  return null;
}

FunnelSeries.type = "Series";
Funnel.Series = FunnelSeries;

// TODO: Fix typings
// @ts-ignore:
FunnelSeries.defaultProps = {
  type: "funnel",
};

Funnel.type = "SeriesChart";
export default Funnel;
