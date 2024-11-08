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

import type { SeriesSupertrendOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Supertrend/SupertrendIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Supertrend series
 */
const Supertrend = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "supertrend",
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

interface SupertrendSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSupertrendOptions>;
}

export function SupertrendSeries(_props: SupertrendSeriesProps) {
  return null;
}

SupertrendSeries.type = "Series";
Supertrend.Series = SupertrendSeries;

// TODO: Fix typings
// @ts-ignore:
SupertrendSeries.defaultProps = {
  type: "supertrend",
};

Supertrend.type = "SeriesChart";
export default Supertrend;
