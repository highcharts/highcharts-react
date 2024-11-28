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

import type { SeriesMomentumOptions } from "highcharts/highcharts";
import type TooltipComponent from "../src/options/Tooltip";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Momentum/MomentumIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Momentum series
 */
const Momentum = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "momentum",
        },
      },
      props.options || {}
    )
  );

  return (
    <Chart
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Chart>
  );
};

interface MomentumSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMomentumOptions>;
  children?: React.ReactNode;
}

export function MomentumSeries(_props: MomentumSeriesProps) {
  return null;
}

// TODO: replace uses of this with _HCReact.type
MomentumSeries.type = "Series";
Momentum.Series = MomentumSeries;

MomentumSeries._HCReact = {
  type: "Series",
  HC_Option: "series.momentum",
  childOption: "series.momentum",
};

// TODO: Fix typings
// @ts-ignore:
MomentumSeries.defaultProps = {
  type: "momentum",
};

Momentum.type = "SeriesChart";
export default Momentum;
