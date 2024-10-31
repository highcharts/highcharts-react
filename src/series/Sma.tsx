/**
 * React integration.
 * Copyright (c) 2024, Highsoft
 *
 * A valid license is required for using this software.
 * See highcharts.com/license
 *
 * Built for Highcharts v.xx.
 * Build stamp: 2024-10-31
 *
 */

import React, {
  useState,
  // @ts-ignore
} from "react";

import type { SeriesSmaOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Highcharts, HighchartsNS } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/SMA/SMAIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(HighchartsNS);
}

/**
 * Sma series
 */
const Sma = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "sma",
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

interface SmaSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesSmaOptions>;
}

export function SmaSeries(_props: SmaSeriesProps) {
  return null;
}

SmaSeries.type = "Series";
Sma.Series = SmaSeries;

// TODO: Fix typings
// @ts-ignore:
SmaSeries.defaultProps = {
  type: "sma",
};

Sma.type = "SeriesChart";
export default Sma;
