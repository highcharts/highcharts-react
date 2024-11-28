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

import type { SeriesFunnelOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

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
  children?: React.ReactNode;
}

export function FunnelSeries(_props: FunnelSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
FunnelSeries.type = "Series";
Funnel.Series = FunnelSeries;

FunnelSeries._HCReact = {
  type: "Series",
  HC_Option: "series.funnel",
  childOption: "series.funnel",
};

// TODO: Fix typings
// @ts-ignore:
FunnelSeries.defaultProps = {
  type: "funnel",
};

Funnel.type = "SeriesChart";
export default Funnel;
