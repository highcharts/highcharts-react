/**
 * React integration.
 * Copyright (c) 2025, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2025-04-08
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

import { Chart, getHighcharts } from "../Highcharts";

import SeriesMod from "highcharts/esm/modules/momentum.src.js";

if (typeof getHighcharts().__provided === "undefined") {
  if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
    SeriesMod(getHighcharts());
  }
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

Momentum.type = "SeriesChart";
export default Momentum;
