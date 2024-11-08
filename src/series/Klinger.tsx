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

import type { SeriesKlingerOptions } from "highcharts/highcharts";

import type {
  Options,
  ICommonAttributes,
  ICommonSeriesAttributes,
  WithoutType,
} from "../Highcharts";

import { Chart, Highcharts } from "../Highcharts";

import SeriesMod from "highcharts/es-modules/Stock/Indicators/Klinger/KlingerIndicator.js";

if (typeof SeriesMod === "function" && !/^class\s/.test(SeriesMod + "")) {
  SeriesMod(Highcharts);
}

/**
 * Klinger series
 */
const Klinger = (props: ICommonAttributes) => {
  const [chartConfig] = useState<Options>(
    Object.assign(
      {
        chart: {
          type: "klinger",
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

interface KlingerSeriesProps extends ICommonSeriesAttributes {
  options?: WithoutType<SeriesKlingerOptions>;
}

export function KlingerSeries(_props: KlingerSeriesProps) {
  return null;
}

KlingerSeries.type = "Series";
Klinger.Series = KlingerSeries;

// TODO: Fix typings
// @ts-ignore:
KlingerSeries.defaultProps = {
  type: "klinger",
};

Klinger.type = "SeriesChart";
export default Klinger;
