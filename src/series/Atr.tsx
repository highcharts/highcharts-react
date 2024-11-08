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

import type { SeriesAtrOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/ATR/ATRIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Atr series
 */
const Atr = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "atr",
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

interface AtrSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesAtrOptions>;
}

export function AtrSeries(_props: AtrSeriesProps) {
  return null;
}

AtrSeries.type = "Series";
Atr.Series = AtrSeries;

// TODO: Fix typings
// @ts-ignore:
AtrSeries.defaultProps = {
  type: "atr",
};

Atr.type = "SeriesChart";
export default Atr;
