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

import type { SeriesPpoOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/PPO/PPOIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Ppo series
 */
const Ppo = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "ppo",
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

interface PpoSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesPpoOptions>;
}

export function PpoSeries(_props: PpoSeriesProps) {
  return null;
}

PpoSeries.type = "Series";
Ppo.Series = PpoSeries;

// TODO: Fix typings
// @ts-ignore:
PpoSeries.defaultProps = {
  type: "ppo",
};

Ppo.type = "SeriesChart";
export default Ppo;
