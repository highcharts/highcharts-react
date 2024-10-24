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

import type { SeriesMomentumOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Momentum/MomentumIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
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
    <Highcharts
      title={props.title}
      chartConstructor="stockChart"
      options={chartConfig}
    >
      {props.children}
    </Highcharts>
  );
};

interface MomentumSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesMomentumOptions>;
}

export function MomentumSeries(_props: MomentumSeriesProps) {
  return null;
}

MomentumSeries.type = "Series";
Momentum.Series = MomentumSeries;

// TODO: Fix typings
// @ts-ignore:
MomentumSeries.defaultProps = {
  type: "momentum",
};

Momentum.type = "SeriesChart";
export default Momentum;
